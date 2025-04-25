import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ListTodo, 
  Settings, 
  Grid, 
  Trello, 
  CalendarDays, 
  Palette, 
  Share2,
  ChevronDown,
  ChevronRight,
  Users,
  UserPlus,
  UserCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ViewType } from './types';

interface SidebarProps { 
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeView: ViewType;
  handleViewChange: (view: ViewType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  sidebarOpen, 
  setSidebarOpen, 
  activeView, 
  handleViewChange 
}) => {
  const [teamsMenuOpen, setTeamsMenuOpen] = useState(false);

  return (
  <div className={`hidden md:block app-sidebar bg-background border-r transition-all duration-300 ${sidebarOpen ? 'w-[240px]' : 'w-[60px]'}`}>
    <div className="sticky top-0 h-[calc(100vh-4rem)] overflow-y-auto">
      <nav className="p-3 flex flex-col gap-1">
        <Button
          variant={activeView === 'dashboard' ? 'secondary' : 'ghost'}
          size="sm"
          className="justify-start font-normal"
          onClick={() => {
            console.log('Sidebar: Clicked dashboard view');
            handleViewChange('dashboard');
          }}
        >
          <LayoutDashboard className="h-5 w-5 mr-2" />
          {sidebarOpen && <span className="font-normal">Dashboard</span>}
        </Button>
        <Button
          variant={activeView === 'list' ? 'secondary' : 'ghost'}
          size="sm"
          className="justify-start font-normal"
          onClick={() => {
            console.log('Sidebar: Clicked list view');
            handleViewChange('list');
          }}
        >
          <ListTodo className="h-5 w-5 mr-2" />
          {sidebarOpen && <span className="font-normal">Items</span>}
        </Button>
        
        <Separator className="my-2" />
        
        {/* Teams - Collapsible Menu */}
        <div className="py-1 px-2">
          {sidebarOpen && <p className="text-xs text-muted-foreground mb-1">Teams</p>}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="justify-start w-full font-normal"
          onClick={() => setTeamsMenuOpen(!teamsMenuOpen)}
        >
          <Users className="h-5 w-5 mr-2" />
          {sidebarOpen && (
            <div className="flex justify-between items-center w-full">
              <span className="font-normal">Team Management</span>
              {teamsMenuOpen ? 
                <ChevronDown className="h-4 w-4 ml-2" /> : 
                <ChevronRight className="h-4 w-4 ml-2" />
              }
            </div>
          )}
        </Button>
        
        {teamsMenuOpen && sidebarOpen && (
          <div className="ml-6 flex flex-col gap-1 mt-1">
            <Button
              variant="ghost"
              size="sm"
              className="justify-start font-normal"
              onClick={() => {
                console.log('Sidebar: Clicked team members view');
              }}
            >
              <UserCheck className="h-5 w-5 mr-2" />
              <span className="font-normal">Members</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start font-normal"
              onClick={() => {
                console.log('Sidebar: Clicked invite team members view');
              }}
            >
              <UserPlus className="h-5 w-5 mr-2" />
              <span className="font-normal">Invite</span>
            </Button>
          </div>
        )}
        
        <Separator className="my-2" />
        
        {/* Layout views */}
        <div className="py-1 px-2">
          {sidebarOpen && <p className="text-xs text-muted-foreground mb-1">Layout Views</p>}
        </div>
        
        <Button
          variant={activeView === 'basicGrid' ? 'secondary' : 'ghost'}
          size="sm"
          className="justify-start font-normal"
          onClick={() => {
            console.log('Sidebar: Clicked basicGrid view');
            handleViewChange('basicGrid');
          }}
        >
          <Grid className="h-5 w-5 mr-2" />
          {sidebarOpen && <span className="font-normal">Basic Grid</span>}
        </Button>
        
        <Button
          variant={activeView === 'kanban' ? 'secondary' : 'ghost'}
          size="sm"
          className="justify-start font-normal"
          onClick={() => {
            console.log('Sidebar: Clicked kanban view');
            handleViewChange('kanban');
          }}
        >
          <Trello className="h-5 w-5 mr-2" />
          {sidebarOpen && <span className="font-normal">Kanban Board</span>}
        </Button>
        
        <Button
          variant={activeView === 'calendar' ? 'secondary' : 'ghost'}
          size="sm"
          className="justify-start font-normal"
          onClick={() => {
            console.log('Sidebar: Clicked calendar view');
            handleViewChange('calendar');
          }}
        >
          <CalendarDays className="h-5 w-5 mr-2" />
          {sidebarOpen && <span className="font-normal">Calendar</span>}
        </Button>
        
        <Separator className="my-2" />
        
        {/* Advanced views */}
        <div className="py-1 px-2">
          {sidebarOpen && <p className="text-xs text-muted-foreground mb-1">Advanced Editors</p>}
        </div>
        
        <Button
          variant={activeView === 'canvas' ? 'secondary' : 'ghost'}
          size="sm"
          className="justify-start font-normal"
          onClick={() => {
            console.log('Sidebar: Clicked canvas view');
            handleViewChange('canvas');
          }}
        >
          <Palette className="h-5 w-5 mr-2" />
          {sidebarOpen && <span className="font-normal">Canvas Editor</span>}
        </Button>
        
        <Button
          variant={activeView === 'workflow' ? 'secondary' : 'ghost'}
          size="sm"
          className="justify-start font-normal"
          onClick={() => {
            console.log('Sidebar: Clicked workflow view');
            handleViewChange('workflow');
          }}
        >
          <Share2 className="h-5 w-5 mr-2" />
          {sidebarOpen && <span className="font-normal">Workflow</span>}
        </Button>
        
        <Separator className="my-2" />
        
        <Button
          variant={activeView === 'settings' ? 'secondary' : 'ghost'}
          size="sm"
          className="justify-start font-normal"
          onClick={() => {
            console.log('Sidebar: Clicked settings view');
            handleViewChange('settings');
          }}
        >
          <Settings className="h-5 w-5 mr-2" />
          {sidebarOpen && <span className="font-normal">Settings</span>}
        </Button>
      </nav>
    </div>
  </div>
  );
};

export default Sidebar; 