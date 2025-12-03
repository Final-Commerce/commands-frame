import { useState } from 'react';
import './App.css';
import { commands } from '@final-commerce/commands-frame';

function App() {
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productsError, setProductsError] = useState<string>('');
  const [customSaleLoading, setCustomSaleLoading] = useState(false);
  const [customSaleResponse, setCustomSaleResponse] = useState<string>('');
  const [customSaleLabel, setCustomSaleLabel] = useState<string>('Custom Item');
  const [customSalePrice, setCustomSalePrice] = useState<string>('10.00');
  const [applyTaxes, setApplyTaxes] = useState<boolean>(false);
  
  // New state for customer commands
  const [customers, setCustomers] = useState<any[]>([]);
  const [customersLoading, setCustomersLoading] = useState(false);
  const [customersError, setCustomersError] = useState<string>('');
  
  // New state for category commands
  const [categories, setCategories] = useState<any[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState<string>('');
  
  // New state for product variants commands
  const [variants, setVariants] = useState<any[]>([]);
  const [variantsLoading, setVariantsLoading] = useState(false);
  const [variantsError, setVariantsError] = useState<string>('');
  const [variantProductId, setVariantProductId] = useState<string>('');
  
  const [assignCustomerId, setAssignCustomerId] = useState<string>('');
  const [assignCustomerLoading, setAssignCustomerLoading] = useState(false);
  const [assignCustomerResponse, setAssignCustomerResponse] = useState<string>('');
  
  const [newCustomer, setNewCustomer] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '1234567890'
  });
  const [addCustomerLoading, setAddCustomerLoading] = useState(false);
  const [addCustomerResponse, setAddCustomerResponse] = useState<string>('');

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
    // alert('Modal in window, try to open it');

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

  const handleGetCustomers = async () => {
    if (!isInIframe) {
      setCustomersError('Error: Not running in iframe');
      return;
    }

    setCustomersLoading(true);
    setCustomers([]);
    setCustomersError('');

    try {
      const result = await commands.getCustomers({});
      
      console.log('getCustomers result:', result);
      
      if (result && typeof result === 'object') {
        if (result.customers && Array.isArray(result.customers)) {
          setCustomers(result.customers);
        } else {
          setCustomersError(`Invalid response format. Expected customers array, got: ${JSON.stringify(result).substring(0, 100)}`);
        }
      } else {
        setCustomersError('Invalid response format: result is not an object');
      }
    } catch (error) {
      setCustomersError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setCustomersLoading(false);
    }
  };

  const handleAssignCustomer = async () => {
    if (!isInIframe) {
      setAssignCustomerResponse('Error: Not running in iframe');
      return;
    }

    if (!assignCustomerId) {
      setAssignCustomerResponse('Error: Please enter a customer ID');
      return;
    }

    setAssignCustomerLoading(true);
    setAssignCustomerResponse('');

    try {
      const result = await commands.assignCustomer({
        customerId: assignCustomerId
      });
      
      setAssignCustomerResponse(`Success: ${JSON.stringify(result, null, 2)}`);
    } catch (error) {
      setAssignCustomerResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setAssignCustomerLoading(false);
    }
  };

  const handleAddCustomer = async () => {
    if (!isInIframe) {
      setAddCustomerResponse('Error: Not running in iframe');
      return;
    }

    setAddCustomerLoading(true);
    setAddCustomerResponse('');

    try {
      const result = await commands.addCustomer({
        customer: newCustomer
      });
      
      setAddCustomerResponse(`Success: ${JSON.stringify(result, null, 2)}`);
    } catch (error) {
      setAddCustomerResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setAddCustomerLoading(false);
    }
  };

  const handleGetCategories = async () => {
    if (!isInIframe) {
      setCategoriesError('Error: Not running in iframe');
      return;
    }

    setCategoriesLoading(true);
    setCategories([]);
    setCategoriesError('');

    try {
      const result = await commands.getCategories({});
      
      console.log('getCategories result:', result);
      
      if (result && typeof result === 'object') {
        if (result.categories && Array.isArray(result.categories)) {
          setCategories(result.categories);
        } else {
          setCategoriesError(`Invalid response format. Expected categories array, got: ${JSON.stringify(result).substring(0, 100)}`);
        }
      } else {
        setCategoriesError('Invalid response format: result is not an object');
      }
    } catch (error) {
      setCategoriesError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setCategoriesLoading(false);
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
      
      console.log('getProductVariants result:', result);
      
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
              <button 
                onClick={handleGetCustomers} 
                disabled={customersLoading}
              >
                {customersLoading ? 'Loading...' : 'Call GetCustomers Action'}
              </button>
              <button 
                onClick={handleGetCategories} 
                disabled={categoriesLoading}
              >
                {categoriesLoading ? 'Loading...' : 'Call GetCategories Action'}
              </button>
            </div>
            
            {/* Customer Management Section */}
            <div style={{ marginTop: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>
              <h3 style={{ marginTop: 0 }}>Customer Management</h3>
              
              {/* Assign Customer */}
              <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                <h4>Assign Customer</h4>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Customer ID:</label>
                    <input
                      type="text"
                      value={assignCustomerId}
                      onChange={(e) => setAssignCustomerId(e.target.value)}
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                      placeholder="Enter Customer ID"
                    />
                  </div>
                  <button 
                    onClick={handleAssignCustomer} 
                    disabled={assignCustomerLoading}
                  >
                    {assignCustomerLoading ? 'Assigning...' : 'Assign'}
                  </button>
                </div>
                {assignCustomerResponse && (
                  <div style={{ marginTop: '10px', padding: '10px', background: assignCustomerResponse.startsWith('Error') ? '#fee' : '#efe', borderRadius: '4px', color: assignCustomerResponse.startsWith('Error') ? '#c33' : '#3c3' }}>
                    <strong>{assignCustomerResponse.startsWith('Error') ? 'Error:' : 'Success:'}</strong>
                    <pre style={{ margin: '5px 0 0 0', whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '12px' }}>{assignCustomerResponse.replace(/^(Success|Error):\s*/, '')}</pre>
                  </div>
                )}
              </div>

              {/* Add Customer */}
              <div>
                <h4>Add New Customer</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>First Name</label>
                    <input
                      type="text"
                      value={newCustomer.firstName}
                      onChange={(e) => setNewCustomer({...newCustomer, firstName: e.target.value})}
                      style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>Last Name</label>
                    <input
                      type="text"
                      value={newCustomer.lastName}
                      onChange={(e) => setNewCustomer({...newCustomer, lastName: e.target.value})}
                      style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>Email</label>
                    <input
                      type="email"
                      value={newCustomer.email}
                      onChange={(e) => setNewCustomer({...newCustomer, email: e.target.value})}
                      style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>Phone</label>
                    <input
                      type="text"
                      value={newCustomer.phone}
                      onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})}
                      style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                  </div>
                </div>
                <button 
                  onClick={handleAddCustomer} 
                  disabled={addCustomerLoading}
                  style={{ width: '100%' }}
                >
                  {addCustomerLoading ? 'Adding...' : 'Add Customer'}
                </button>
                {addCustomerResponse && (
                  <div style={{ marginTop: '10px', padding: '10px', background: addCustomerResponse.startsWith('Error') ? '#fee' : '#efe', borderRadius: '4px', color: addCustomerResponse.startsWith('Error') ? '#c33' : '#3c3' }}>
                    <strong>{addCustomerResponse.startsWith('Error') ? 'Error:' : 'Success:'}</strong>
                    <pre style={{ margin: '5px 0 0 0', whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '12px' }}>{addCustomerResponse.replace(/^(Success|Error):\s*/, '')}</pre>
                  </div>
                )}
              </div>
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
                    {products.map((product, index) => {
                      const productId = product._id || product.id;
                      return (
                        <tr 
                          key={productId || index} 
                          style={{ 
                            borderBottom: '1px solid #eee',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s'
                          }}
                          onClick={() => {
                            if (productId) {
                              setVariantProductId(productId);
                            }
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f5f5f5';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
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
                      );
                    })}
                  </tbody>
                </table>
                <div style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '4px', textAlign: 'center' }}>
                  <strong>Total: {products.length} products</strong>
                </div>
              </div>
            )}
            
            {customersError && (
              <div style={{ marginTop: '10px', padding: '10px', background: '#fee', borderRadius: '4px', color: '#c33' }}>
                <strong>Error:</strong> {customersError}
              </div>
            )}
            {customers.length > 0 && (
              <div style={{ marginTop: '10px', overflowX: 'auto' }}>
                <h3>Customers ({customers.length})</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '4px' }}>
                  <thead>
                    <tr style={{ background: '#f0f0f0' }}>
                      <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Name</th>
                      <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Email</th>
                      <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Phone</th>
                      <th style={{ padding: '10px', textAlign: 'right', borderBottom: '2px solid #ddd' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer, index) => (
                      <tr key={customer._id || customer.id || index} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '10px' }}>{customer.firstName} {customer.lastName}</td>
                        <td style={{ padding: '10px' }}>{customer.email}</td>
                        <td style={{ padding: '10px' }}>{customer.phone}</td>
                        <td style={{ padding: '10px', textAlign: 'right' }}>
                          <button 
                            onClick={() => {
                              setAssignCustomerId(customer._id || customer.id);
                            }}
                            style={{ padding: '4px 8px', fontSize: '12px' }}
                          >
                            Select
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {categoriesError && (
              <div style={{ marginTop: '10px', padding: '10px', background: '#fee', borderRadius: '4px', color: '#c33' }}>
                <strong>Error:</strong> {categoriesError}
              </div>
            )}
            {categories.length > 0 && (
              <div style={{ marginTop: '10px', overflowX: 'auto' }}>
                <h3>Categories ({categories.length})</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '4px' }}>
                  <thead>
                    <tr style={{ background: '#f0f0f0' }}>
                      <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Name</th>
                      <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Parent ID</th>
                      <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>External ID</th>
                      <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, index) => (
                      <tr key={category._id || category.id || index} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '10px' }}>{category.name || 'Unnamed Category'}</td>
                        <td style={{ padding: '10px' }}>{category.parentId || '—'}</td>
                        <td style={{ padding: '10px' }}>{category.externalId || '—'}</td>
                        <td style={{ padding: '10px', fontSize: '12px', color: '#666' }}>{category._id || category.id || 'N/A'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '4px', textAlign: 'center' }}>
                  <strong>Total: {categories.length} categories</strong>
                </div>
              </div>
            )}
            
            {/* Get Product Variants Section */}
            <div style={{ marginTop: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>
              <h3 style={{ marginTop: 0 }}>Get Product Variants</h3>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', marginBottom: '10px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Product ID:</label>
                  <input
                    type="text"
                    value={variantProductId}
                    onChange={(e) => setVariantProductId(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    placeholder="Enter Product ID"
                  />
                </div>
                <button 
                  onClick={handleGetProductVariants} 
                  disabled={variantsLoading}
                >
                  {variantsLoading ? 'Loading...' : 'Get Variants'}
                </button>
              </div>
              {variantsError && (
                <div style={{ marginTop: '10px', padding: '10px', background: '#fee', borderRadius: '4px', color: '#c33' }}>
                  <strong>Error:</strong> {variantsError}
                </div>
              )}
              {variants.length > 0 && (
                <div style={{ marginTop: '10px', overflowX: 'auto' }}>
                  <h4>Variants ({variants.length})</h4>
                  <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '4px' }}>
                    <thead>
                      <tr style={{ background: '#f0f0f0' }}>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Name/SKU</th>
                        <th style={{ padding: '10px', textAlign: 'right', borderBottom: '2px solid #ddd' }}>Price</th>
                        <th style={{ padding: '10px', textAlign: 'right', borderBottom: '2px solid #ddd' }}>Sale Price</th>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Barcode</th>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {variants.map((variant, index) => (
                        <tr key={variant._id || variant.id || index} style={{ borderBottom: '1px solid #eee' }}>
                          <td style={{ padding: '10px' }}>{variant.name || variant.sku || 'Unnamed Variant'}</td>
                          <td style={{ padding: '10px', textAlign: 'right' }}>{variant.price ? `$${parseFloat(variant.price).toFixed(2)}` : '—'}</td>
                          <td style={{ padding: '10px', textAlign: 'right' }}>{variant.salePrice ? `$${parseFloat(variant.salePrice).toFixed(2)}` : '—'}</td>
                          <td style={{ padding: '10px' }}>{variant.barcode || '—'}</td>
                          <td style={{ padding: '10px', fontSize: '12px', color: '#666' }}>{variant._id || variant.id || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '4px', textAlign: 'center' }}>
                    <strong>Total: {variants.length} variants</strong>
                  </div>
                </div>
              )}
            </div>
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
