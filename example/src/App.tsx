import { useState } from 'react';
import './App.css';
import { commands } from '@final-commerce/commands-frame';

interface Product {
  _id?: string;
  id?: string;
  name?: string;
  images?: string[];
  variants?: Array<{ price?: number; [key: string]: any }>;
  sourceId?: string;
  [key: string]: any;
}

function App() {
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productsError, setProductsError] = useState<string>('');
  const [customSaleLoading, setCustomSaleLoading] = useState(false);
  const [customSaleResponse, setCustomSaleResponse] = useState<string>('');
  const [customSaleLabel, setCustomSaleLabel] = useState<string>('Custom Item');
  const [customSalePrice, setCustomSalePrice] = useState<string>('10.00');
  const [applyTaxes, setApplyTaxes] = useState<boolean>(false);
  const isInIframe = window.self !== window.top;

  const handleCallAction = async () => {
    if (!isInIframe) {
      setResponse('Error: Not running in iframe');
      return;
    }

    setLoading(true);
    setResponse('');
    setProducts([]);
    setProductsError('');

    try {
      // Example: Call exampleFunction using commands namespace
      const result = await commands.exampleFunction({
        param1: 'Pram1 value',
        param2: 'Pram2 value',
        param3: 'Pram3 value',
      });
      
      setResponse(`Success: ${JSON.stringify(result)}`);
    } catch (error) {
      setResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGetProducts = async () => {
    //try modal window
    alert('Modal in window, try to open it');

    if (!isInIframe) {
      setProductsError('Error: Not running in iframe');
      return;
    }

    setProductsLoading(true);
    setProducts([]);
    setProductsError('');
    setResponse('');

    try {
      // Example: Call getProducts using commands namespace
      const result = await commands.getProducts({});
      
      console.log('getProducts result:', result);
      
      if (result && typeof result === 'object') {
        if (result.products && Array.isArray(result.products)) {
          setProducts(result.products);
        } else if (Array.isArray(result)) {
          setProducts(result);
        } else {
          setProductsError(`Invalid response format. Expected products array, got: ${JSON.stringify(result).substring(0, 100)}`);
        }
      } else {
        setProductsError('Invalid response format: result is not an object');
      }
    } catch (error) {
      setProductsError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setProductsLoading(false);
    }
  };

  const getProductPrice = (product: Product): string => {
    if (product.variants && product.variants.length > 0) {
      const prices = product.variants
        .map(v => v.price)
        .filter(p => p != null && !isNaN(Number(p)))
        .map(p => Number(p));
      
      if (prices.length > 0) {
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        return minPrice === maxPrice 
          ? `$${minPrice.toFixed(2)}` 
          : `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;
      }
    }
    return 'N/A';
  };

  const getProductImage = (product: Product): string => {
    if (product.images && product.images.length > 0) {
      return product.images[0];
    }
    return '';
  };

  const handleAddCustomSale = async () => {
    if (!isInIframe) {
      setCustomSaleResponse('Error: Not running in iframe');
      return;
    }

    setCustomSaleLoading(true);
    setCustomSaleResponse('');

    try {
      const result = await commands.addCustomSale({
        label: customSaleLabel,
        price: parseFloat(customSalePrice) || 0,
        applyTaxes: applyTaxes,
      });
      
      setCustomSaleResponse(`Success: ${JSON.stringify(result, null, 2)}`);
    } catch (error) {
      setCustomSaleResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setCustomSaleLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Vite Test App</h1>
        <div className="info">
          <p>Running in iframe: {isInIframe ? 'Yes' : 'No'}</p>
        </div>
        
        { /* isInIframe */ true && (
          <div className="card">
            <h2>PostMessage Test</h2>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px', justifyContent: 'center' }}>
              <button 
                onClick={handleCallAction} 
                disabled={loading}
              >
                {loading ? 'Calling...' : 'Call exampleFunction Action'}
              </button>
              <button 
                onClick={handleGetProducts} 
                disabled={productsLoading}
              >
                {productsLoading ? 'Loading...' : 'Call GetProducts Action'}
              </button>
            </div>
            
            <div style={{ marginTop: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>
              <h3 style={{ marginTop: 0 }}>Add Custom Sale</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Label:</label>
                  <input
                    type="text"
                    value={customSaleLabel}
                    onChange={(e) => setCustomSaleLabel(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    placeholder="Custom sale label"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Price:</label>
                  <input
                    type="number"
                    step="0.01"
                    value={customSalePrice}
                    onChange={(e) => setCustomSalePrice(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={applyTaxes}
                      onChange={(e) => setApplyTaxes(e.target.checked)}
                    />
                    <span>Apply taxes</span>
                  </label>
                </div>
              </div>
              <button 
                onClick={handleAddCustomSale} 
                disabled={customSaleLoading}
                style={{ width: '100%' }}
              >
                {customSaleLoading ? 'Adding...' : 'Add Custom Sale'}
              </button>
              {customSaleResponse && (
                <div style={{ marginTop: '10px', padding: '10px', background: customSaleResponse.startsWith('Error') ? '#fee' : '#efe', borderRadius: '4px', color: customSaleResponse.startsWith('Error') ? '#c33' : '#3c3' }}>
                  <strong>{customSaleResponse.startsWith('Error') ? 'Error:' : 'Success:'}</strong>
                  <pre style={{ margin: '5px 0 0 0', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{customSaleResponse.replace(/^(Success|Error):\s*/, '')}</pre>
                </div>
              )}
            </div>
            {response && (
              <div style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '4px', marginBottom: '10px' }}>
                <strong>Response:</strong> {response}
              </div>
            )}
            {productsError && (
              <div style={{ marginTop: '10px', padding: '10px', background: '#fee', borderRadius: '4px', color: '#c33' }}>
                <strong>Error:</strong> {productsError}
              </div>
            )}
            {products.length > 0 && (
              <div style={{ marginTop: '10px', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '4px' }}>
                  <thead>
                    <tr style={{ background: '#f0f0f0' }}>
                      <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Picture</th>
                      <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Name</th>
                      <th style={{ padding: '10px', textAlign: 'right', borderBottom: '2px solid #ddd' }}>Price</th>
                      <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product._id || product.id || index} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '10px' }}>
                          {getProductImage(product) ? (
                            <img 
                              src={getProductImage(product)} 
                              alt={product.name || 'Product'} 
                              style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }}
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          ) : (
                            <div style={{ width: '50px', height: '50px', background: '#f0f0f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '12px' }}>
                              No img
                            </div>
                          )}
                        </td>
                        <td style={{ padding: '10px' }}>{product.name || 'Unnamed Product'}</td>
                        <td style={{ padding: '10px', textAlign: 'right' }}>{getProductPrice(product)}</td>
                        <td style={{ padding: '10px' }}>{product.source || ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '4px', textAlign: 'center' }}>
                  <strong>Total: {products.length} products</strong>
                </div>
              </div>
            )}
          </div>
        )}
        
        <p className="read-the-docs">
          This is a test app for iframe testing
        </p>
      </div>
    </div>
  );
}

export default App;

