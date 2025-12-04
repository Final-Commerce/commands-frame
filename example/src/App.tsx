import { useState } from 'react';
import './App.css';
import { Sidebar, SectionId } from './components/Sidebar';
import { ProductsSection } from './components/sections/ProductsSection';
import { CustomersSection } from './components/sections/CustomersSection';
import { CategoriesSection } from './components/sections/CategoriesSection';
import { CartSection } from './components/sections/CartSection';
import { ExamplesSection } from './components/sections/ExamplesSection';

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('products');
  const isInIframe = window.self !== window.top;

  const renderSection = () => {
    switch (activeSection) {
      case 'products':
        return <ProductsSection isInIframe={isInIframe} />;
      case 'customers':
        return <CustomersSection isInIframe={isInIframe} />;
      case 'categories':
        return <CategoriesSection isInIframe={isInIframe} />;
      case 'cart':
        return <CartSection isInIframe={isInIframe} />;
      case 'examples':
        return <ExamplesSection isInIframe={isInIframe} />;
      default:
        return <ProductsSection isInIframe={isInIframe} />;
    }
  };

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="app__main">
        <div className="app__header">
          <h1 className="app__title">Commands Frame Example</h1>
          <div className="app__status">
            <span className={`app__status-indicator ${isInIframe ? 'app__status-indicator--active' : ''}`}></span>
            <span className="app__status-text">
              {isInIframe ? 'Running in iframe' : 'Not in iframe'}
            </span>
          </div>
        </div>
        <div className="app__content">
          {renderSection()}
          </div>
      </div>
    </div>
  );
}

export default App;
