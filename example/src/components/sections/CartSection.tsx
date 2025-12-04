import { useState } from 'react';
import { commands } from '@final-commerce/commands-frame';
import { CommandSection } from '../CommandSection';
import { JsonViewer } from '../JsonViewer';
import './Sections.css';

interface CartSectionProps {
  isInIframe: boolean;
}

export function CartSection({ isInIframe }: CartSectionProps) {
  const [customSaleLabel, setCustomSaleLabel] = useState<string>('Custom Item');
  const [customSalePrice, setCustomSalePrice] = useState<string>('10.00');
  const [applyTaxes, setApplyTaxes] = useState<boolean>(false);
  const [customSaleLoading, setCustomSaleLoading] = useState(false);
  const [customSaleResponse, setCustomSaleResponse] = useState<string>('');
  
  const [discountAmount, setDiscountAmount] = useState<string>('10');
  const [discountIsPercent, setDiscountIsPercent] = useState<boolean>(false);
  const [discountLabel, setDiscountLabel] = useState<string>('Discount');
  const [addDiscountLoading, setAddDiscountLoading] = useState(false);
  const [addDiscountResponse, setAddDiscountResponse] = useState<string>('');
  
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [addToCartResponse, setAddToCartResponse] = useState<string>('');
  const [addToCartQuantity, setAddToCartQuantity] = useState<string>('1');
  
  const [cartDiscountAmount, setCartDiscountAmount] = useState<string>('10');
  const [cartDiscountIsPercent, setCartDiscountIsPercent] = useState<boolean>(false);
  const [cartDiscountLabel, setCartDiscountLabel] = useState<string>('Cart Discount');
  const [addCartDiscountLoading, setAddCartDiscountLoading] = useState(false);
  const [addCartDiscountResponse, setAddCartDiscountResponse] = useState<string>('');

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
      
      setCustomSaleResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      setCustomSaleResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setCustomSaleLoading(false);
    }
  };

  const handleAddProductDiscount = async () => {
    if (!isInIframe) {
      setAddDiscountResponse('Error: Not running in iframe');
      return;
    }

    if (!discountAmount) {
      setAddDiscountResponse('Error: Please enter a discount amount');
      return;
    }

    setAddDiscountLoading(true);
    setAddDiscountResponse('');

    try {
      const result = await commands.addProductDiscount({
        amount: parseFloat(discountAmount) || 0,
        isPercent: discountIsPercent,
        label: discountLabel
      });
      
      setAddDiscountResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      setAddDiscountResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setAddDiscountLoading(false);
    }
  };

  const handleAddProductToCart = async () => {
    if (!isInIframe) {
      setAddToCartResponse('Error: Not running in iframe');
      return;
    }

    setAddToCartLoading(true);
    setAddToCartResponse('');

    try {
      const quantity = parseFloat(addToCartQuantity) || 1;
      const result = await commands.addProductToCart({
        quantity: quantity
      });
      
      setAddToCartResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      setAddToCartResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setAddToCartLoading(false);
    }
  };

  const handleAddCartDiscount = async () => {
    if (!isInIframe) {
      setAddCartDiscountResponse('Error: Not running in iframe');
      return;
    }

    if (!cartDiscountAmount) {
      setAddCartDiscountResponse('Error: Please enter a discount amount');
      return;
    }

    setAddCartDiscountLoading(true);
    setAddCartDiscountResponse('');

    try {
      const result = await commands.addCartDiscount({
        amount: parseFloat(cartDiscountAmount) || 0,
        isPercent: cartDiscountIsPercent,
        label: cartDiscountLabel
      });
      
      setAddCartDiscountResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      setAddCartDiscountResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setAddCartDiscountLoading(false);
    }
  };

  return (
    <div className="section-content">
      <CommandSection title="Add Custom Sale">
        <div className="form-group">
          <label className="form-label">Label:</label>
          <input
            type="text"
            value={customSaleLabel}
            onChange={(e) => setCustomSaleLabel(e.target.value)}
            className="form-input"
            placeholder="Custom sale label"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Price:</label>
          <input
            type="number"
            step="0.01"
            value={customSalePrice}
            onChange={(e) => setCustomSalePrice(e.target.value)}
            className="form-input"
            placeholder="0.00"
          />
        </div>
        <div className="form-group">
          <label className="form-checkbox">
            <input
              type="checkbox"
              checked={applyTaxes}
              onChange={(e) => setApplyTaxes(e.target.checked)}
            />
            <span>Apply taxes</span>
          </label>
        </div>
        <button 
          onClick={handleAddCustomSale} 
          disabled={customSaleLoading}
          className="btn btn--primary"
        >
          {customSaleLoading ? 'Adding...' : 'Add Custom Sale'}
        </button>
        
        {customSaleResponse && (
          <JsonViewer 
            data={customSaleResponse} 
            title={customSaleResponse.startsWith('Error') ? 'Error' : 'Success'} 
          />
        )}
      </CommandSection>

      <CommandSection title="Add Discount to Active Product">
        <div className="form-group">
          <label className="form-label">Discount Amount:</label>
          <input
            type="number"
            step="0.01"
            value={discountAmount}
            onChange={(e) => setDiscountAmount(e.target.value)}
            className="form-input"
            placeholder="0.00"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Label:</label>
          <input
            type="text"
            value={discountLabel}
            onChange={(e) => setDiscountLabel(e.target.value)}
            className="form-input"
            placeholder="Discount label"
          />
        </div>
        <div className="form-group">
          <label className="form-checkbox">
            <input
              type="checkbox"
              checked={discountIsPercent}
              onChange={(e) => setDiscountIsPercent(e.target.checked)}
            />
            <span>Is Percentage</span>
          </label>
        </div>
        <button 
          onClick={handleAddProductDiscount} 
          disabled={addDiscountLoading}
          className="btn btn--primary"
        >
          {addDiscountLoading ? 'Adding...' : 'Add Discount'}
        </button>
        
        {addDiscountResponse && (
          <JsonViewer 
            data={addDiscountResponse} 
            title={addDiscountResponse.startsWith('Error') ? 'Error' : 'Success'} 
          />
        )}
      </CommandSection>

      <CommandSection title="Add Cart Discount">
        <div className="form-group">
          <label className="form-label">Discount Amount:</label>
          <input
            type="number"
            step="0.01"
            value={cartDiscountAmount}
            onChange={(e) => setCartDiscountAmount(e.target.value)}
            className="form-input"
            placeholder="0.00"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Label:</label>
          <input
            type="text"
            value={cartDiscountLabel}
            onChange={(e) => setCartDiscountLabel(e.target.value)}
            className="form-input"
            placeholder="Cart discount label"
          />
        </div>
        <div className="form-group">
          <label className="form-checkbox">
            <input
              type="checkbox"
              checked={cartDiscountIsPercent}
              onChange={(e) => setCartDiscountIsPercent(e.target.checked)}
            />
            <span>Is Percentage</span>
          </label>
        </div>
        <button 
          onClick={handleAddCartDiscount} 
          disabled={addCartDiscountLoading}
          className="btn btn--primary"
        >
          {addCartDiscountLoading ? 'Adding...' : 'Add Cart Discount'}
        </button>
        
        {addCartDiscountResponse && (
          <JsonViewer 
            data={addCartDiscountResponse} 
            title={addCartDiscountResponse.startsWith('Error') ? 'Error' : 'Success'} 
          />
        )}
      </CommandSection>

      <CommandSection title="Add Active Product to Cart">
        <div className="form-group">
          <label className="form-label">Quantity:</label>
          <input
            type="number"
            min="1"
            step="1"
            value={addToCartQuantity}
            onChange={(e) => {
              const value = e.target.value;
              if (value === '' || (/^\d+$/.test(value) && parseFloat(value) >= 1)) {
                setAddToCartQuantity(value);
              }
            }}
            className="form-input"
            placeholder="1"
          />
        </div>
        <button 
          onClick={handleAddProductToCart} 
          disabled={addToCartLoading}
          className="btn btn--primary"
        >
          {addToCartLoading ? 'Adding...' : 'Add to Cart'}
        </button>
        
        {addToCartResponse && (
          <JsonViewer 
            data={addToCartResponse} 
            title={addToCartResponse.startsWith('Error') ? 'Error' : 'Success'} 
          />
        )}
      </CommandSection>
    </div>
  );
}

