import React from 'react';
import { ViewType } from './types';
import { getAppConfig } from '../../app-loader';

interface MainContentProps { 
  children: React.ReactNode;
  isFluidLayout: boolean;
  appHeight: number;
  viewType: ViewType;
}

export const MainContent: React.FC<MainContentProps> = ({ 
  children, 
  isFluidLayout, 
  appHeight,
  viewType
}) => {
  // Get app config
  const appConfig = getAppConfig();
  
  // Determine if view should have padding (read from config or fallback to defaults)
  const fullWidthViewTypes = appConfig?.ui?.layout?.fullWidthViewTypes || ['canvas', 'workflow'];
  const isFullWidthView = fullWidthViewTypes.includes(viewType);
  
  // Apply different classes based on view type
  const getContentClasses = () => {
    // Base styling first
    let classes = "main-content flex-1 border-l overflow-y-auto h-[calc(100vh-7.5rem)]";
    
    // Add special classes for editor views that need full width
    if (isFullWidthView) {
      classes += " editor-view";
    }
    
    return classes;
  };
  
  return (
    <div className={getContentClasses()}>
      <div className={isFullWidthView ? "p-0 h-full" : "container mx-auto p-4 md:p-6"}>
        {children}
      </div>
    </div>
  );
};

export default MainContent;