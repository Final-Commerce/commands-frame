import { useState } from 'react';
import { commands } from '@final-commerce/commands-frame';
import { CommandSection } from '../CommandSection';
import { JsonViewer } from '../JsonViewer';
import './Sections.css';

interface ProductsSectionProps {
  isInIframe: boolean;
}

export function ProductsSection({ isInIframe }: ProductsSectionProps) {
  const [products, setProducts] = useState<any[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productsError, setProductsError] = useState<string>('');
  
  const [variants, setVariants] = useState<any[]>([]);
  const [variantsLoading, setVariantsLoading] = useState(false);
  const [variantsError, setVariantsError] = useState<string>('');
  const [variantProductId, setVariantProductId] = useState<string>('');
  
  const [variantId, setVariantId] = useState<string>('');
  const [setProductActiveLoading, setSetProductActiveLoading] = useState(false);
  const [setProductActiveResponse, setSetProductActiveResponse] = useState<string>('');

  const handleGetProducts = async () => {
    if (!isInIframe) {
      setProductsError('Error: Not running in iframe');
      return;
    }

    setProductsLoading(true);
    setProducts([]);
    setProductsError('');

    try {
      const result = await commands.getProducts({});
      
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

  const handleGetProductVariants = async () => {
    if (!isInIframe) {
      setVariantsError('Error: Not running in iframe');
      return;
    }

    if (!variantProductId) {
      setVariantsError('Error: Please enter a product ID');
      return;
    }

    setVariantsLoading(true);
    setVariants([]);
    setVariantsError('');

    try {
      const result = await commands.getProductVariants({
        productId: variantProductId
      });
      
      if (result && typeof result === 'object') {
        if (result.variants && Array.isArray(result.variants)) {
          setVariants(result.variants);
        } else {
          setVariantsError(`Invalid response format. Expected variants array, got: ${JSON.stringify(result).substring(0, 100)}`);
        }
      } else {
        setVariantsError('Invalid response format: result is not an object');
      }
    } catch (error) {
      setVariantsError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setVariantsLoading(false);
    }
  };

  const handleSetProductActive = async () => {
    if (!isInIframe) {
      setSetProductActiveResponse('Error: Not running in iframe');
      return;
    }

    if (!variantId) {
      setSetProductActiveResponse('Error: Please enter a variant ID');
      return;
    }

    setSetProductActiveLoading(true);
    setSetProductActiveResponse('');

    try {
      const result = await commands.setProductActive({
        variantId: variantId
      });
      
      setSetProductActiveResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      setSetProductActiveResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setSetProductActiveLoading(false);
    }
  };

  const getProductPrice = (product: any): string => {
    if (product.variants && product.variants.length > 0) {
      const prices = product.variants
        .map((v: any) => v.price)
        .filter((p: any): p is string => p != null && !isNaN(Number(p)))
        .map((p: string) => Number(p));
      
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

  const getProductImage = (product: any): string => {
    if (product.images && product.images.length > 0) {
      return product.images[0];
    }
    return '';
  };

  return (
    <div className="section-content">
      <CommandSection title="Get Products">
        <button 
          onClick={handleGetProducts} 
          disabled={productsLoading}
          className="btn btn--primary"
        >
          {productsLoading ? 'Loading...' : 'Get Products'}
        </button>
        
        {productsError && (
          <JsonViewer data={productsError} title="Error" />
        )}
        
        {products.length > 0 && (
          <div className="data-table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  const productId = product._id || product.id;
                  return (
                    <tr 
                      key={productId || index}
                      onClick={() => {
                        if (productId) {
                          setVariantProductId(productId);
                        }
                      }}
                      className="data-table__row--clickable"
                    >
                      <td>
                        {getProductImage(product) ? (
                          <img 
                            src={getProductImage(product)} 
                            alt={product.name || 'Product'} 
                            className="product-image"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="product-image-placeholder">No img</div>
                        )}
                      </td>
                      <td>{product.name || 'Unnamed Product'}</td>
                      <td className="text-right">{getProductPrice(product)}</td>
                      <td>{product.source || ''}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="data-table-footer">
              <strong>Total: {products.length} products</strong>
            </div>
          </div>
        )}
      </CommandSection>

      <CommandSection title="Get Product Variants">
        <div className="form-group">
          <label className="form-label">Product ID:</label>
          <input
            type="text"
            value={variantProductId}
            onChange={(e) => setVariantProductId(e.target.value)}
            className="form-input"
            placeholder="Enter Product ID"
          />
        </div>
        <button 
          onClick={handleGetProductVariants} 
          disabled={variantsLoading}
          className="btn btn--primary"
        >
          {variantsLoading ? 'Loading...' : 'Get Variants'}
        </button>
        
        {variantsError && (
          <JsonViewer data={variantsError} title="Error" />
        )}
        
        {variants.length > 0 && (
          <div className="data-table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name/SKU</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">Sale Price</th>
                  <th>Barcode</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {variants.map((variant, index) => {
                  const variantIdValue = variant._id || variant.id;
                  return (
                    <tr 
                      key={variantIdValue || index}
                      onClick={() => {
                        if (variantIdValue) {
                          setVariantId(variantIdValue);
                        }
                      }}
                      className="data-table__row--clickable"
                    >
                      <td>{variant.name || variant.sku || 'Unnamed Variant'}</td>
                      <td className="text-right">{variant.price ? `$${parseFloat(variant.price).toFixed(2)}` : '—'}</td>
                      <td className="text-right">{variant.salePrice ? `$${parseFloat(variant.salePrice).toFixed(2)}` : '—'}</td>
                      <td>{variant.barcode || '—'}</td>
                      <td className="text-muted">{variantIdValue || 'N/A'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="data-table-footer">
              <strong>Total: {variants.length} variants</strong>
            </div>
          </div>
        )}
      </CommandSection>

      <CommandSection title="Set Product Active">
        <div className="form-group">
          <label className="form-label">Variant ID:</label>
          <input
            type="text"
            value={variantId}
            onChange={(e) => setVariantId(e.target.value)}
            className="form-input"
            placeholder="Enter Variant ID"
          />
        </div>
        <button 
          onClick={handleSetProductActive} 
          disabled={setProductActiveLoading}
          className="btn btn--primary"
        >
          {setProductActiveLoading ? 'Setting...' : 'Set Active'}
        </button>
        
        {setProductActiveResponse && (
          <JsonViewer 
            data={setProductActiveResponse} 
            title={setProductActiveResponse.startsWith('Error') ? 'Error' : 'Success'} 
          />
        )}
      </CommandSection>
    </div>
  );
}

