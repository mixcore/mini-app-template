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
  ChevronRight,
  Users,
  UserPlus,
  UserCheck,
  SquareTerminal,
  Bot,
  BookOpen,
  Settings2
} from 'lucide-react';
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
  const [layoutsMenuOpen, setLayoutsMenuOpen] = useState(true);
  const [advancedMenuOpen, setAdvancedMenuOpen] = useState(true);

  return (
    <div className={`hidden md:block app-sidebar bg-background border-r transition-all duration-300 ${sidebarOpen ? 'w-[240px]' : 'w-[60px]'}`} data-collapsible={sidebarOpen ? "default" : "icon"}>
      <div className="sticky top-0 h-[calc(100vh-4rem)] overflow-y-auto">
        <nav className="p-3 flex flex-col gap-2">
          <div data-sidebar="content" className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden">
            {/* Dashboard and Items */}
            <div data-sidebar="group" className="relative flex w-full min-w-0 flex-col p-2">
              <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1">
                <li data-sidebar="menu-item" className="group/menu-item relative">
                  <button 
                    data-sidebar="menu-button" 
                    data-size="default" 
                    data-active={activeView === 'dashboard'} 
                    className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm"
                    onClick={() => {
                      console.log('Sidebar: Clicked dashboard view');
                      handleViewChange('dashboard');
                    }}
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    {sidebarOpen && <span>Dashboard</span>}
                  </button>
                </li>
                <li data-sidebar="menu-item" className="group/menu-item relative">
                  <button 
                    data-sidebar="menu-button" 
                    data-size="default" 
                    data-active={activeView === 'list'} 
                    className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm"
                    onClick={() => {
                      console.log('Sidebar: Clicked list view');
                      handleViewChange('list');
                    }}
                  >
                    <ListTodo className="h-5 w-5" />
                    {sidebarOpen && <span>Items</span>}
                  </button>
                </li>
              </ul>
            </div>

            {/* Teams Section */}
            <div data-sidebar="group" className="relative flex w-full min-w-0 flex-col p-2">
              {sidebarOpen && <div data-sidebar="group-label" className="flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0">Teams</div>}
              <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1">
                <li data-sidebar="menu-item" className="group/menu-item relative group/collapsible" data-state={teamsMenuOpen ? "open" : "closed"}>
                  <button 
                    data-sidebar="menu-button" 
                    data-size="default" 
                    data-active="false" 
                    data-state={teamsMenuOpen ? "open" : "closed"}
                    className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm"
                    onClick={() => setTeamsMenuOpen(!teamsMenuOpen)}
                    aria-expanded={teamsMenuOpen}
                    aria-controls={`teams-submenu`}
                  >
                    <Users className="h-5 w-5" />
                    {sidebarOpen && <span>Team Management</span>}
                    {sidebarOpen && <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                  </button>
                  {teamsMenuOpen && sidebarOpen && (
                    <div data-state="open" id="teams-submenu">
                      <ul data-sidebar="menu-sub" className="mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5 group-data-[collapsible=icon]:hidden">
                        <li>
                          <a 
                            href="#" 
                            data-sidebar="menu-sub-button" 
                            data-size="md" 
                            className="flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden"
                            onClick={(e) => {
                              e.preventDefault();
                              console.log('Sidebar: Clicked team members view');
                            }}
                          >
                            <UserCheck className="h-4 w-4" />
                            <span>Members</span>
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            data-sidebar="menu-sub-button" 
                            data-size="md" 
                            className="flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden"
                            onClick={(e) => {
                              e.preventDefault();
                              console.log('Sidebar: Clicked invite team members view');
                            }}
                          >
                            <UserPlus className="h-4 w-4" />
                            <span>Invite</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            
            {/* Layout views */}
            <div data-sidebar="group" className="relative flex w-full min-w-0 flex-col p-2">
              {sidebarOpen && <div data-sidebar="group-label" className="flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0">Layout Views</div>}
              <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1">
                <li data-sidebar="menu-item" className="group/menu-item relative group/collapsible" data-state={layoutsMenuOpen ? "open" : "closed"}>
                  <button 
                    data-sidebar="menu-button" 
                    data-size="default" 
                    data-active="false" 
                    data-state={layoutsMenuOpen ? "open" : "closed"}
                    className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm"
                    onClick={() => setLayoutsMenuOpen(!layoutsMenuOpen)}
                    aria-expanded={layoutsMenuOpen}
                    aria-controls="layouts-submenu"
                  >
                    <SquareTerminal className="h-5 w-5" />
                    {sidebarOpen && <span>Layouts</span>}
                    {sidebarOpen && <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                  </button>
                  {layoutsMenuOpen && sidebarOpen && (
                    <div data-state="open" id="layouts-submenu">
                      <ul data-sidebar="menu-sub" className="mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5 group-data-[collapsible=icon]:hidden">
                        <li>
                          <a 
                            href="#" 
                            data-sidebar="menu-sub-button" 
                            data-size="md" 
                            data-active={activeView === 'basicGrid'}
                            className="flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden"
                            onClick={(e) => {
                              e.preventDefault();
                              handleViewChange('basicGrid');
                            }}
                          >
                            <Grid className="h-4 w-4" />
                            <span>Basic Grid</span>
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            data-sidebar="menu-sub-button" 
                            data-size="md" 
                            data-active={activeView === 'kanban'}
                            className="flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden"
                            onClick={(e) => {
                              e.preventDefault();
                              handleViewChange('kanban');
                            }}
                          >
                            <Trello className="h-4 w-4" />
                            <span>Kanban Board</span>
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            data-sidebar="menu-sub-button" 
                            data-size="md" 
                            data-active={activeView === 'calendar'}
                            className="flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden"
                            onClick={(e) => {
                              e.preventDefault();
                              handleViewChange('calendar');
                            }}
                          >
                            <CalendarDays className="h-4 w-4" />
                            <span>Calendar</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            
            {/* Advanced Editors */}
            <div data-sidebar="group" className="relative flex w-full min-w-0 flex-col p-2">
              {sidebarOpen && <div data-sidebar="group-label" className="flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0">Advanced Editors</div>}
              <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1">
                <li data-sidebar="menu-item" className="group/menu-item relative group/collapsible" data-state={advancedMenuOpen ? "open" : "closed"}>
                  <button 
                    data-sidebar="menu-button" 
                    data-size="default" 
                    data-active="false" 
                    data-state={advancedMenuOpen ? "open" : "closed"}
                    className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm"
                    onClick={() => setAdvancedMenuOpen(!advancedMenuOpen)}
                    aria-expanded={advancedMenuOpen}
                    aria-controls="advanced-submenu"
                  >
                    <Bot className="h-5 w-5" />
                    {sidebarOpen && <span>Advanced Tools</span>}
                    {sidebarOpen && <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                  </button>
                  {advancedMenuOpen && sidebarOpen && (
                    <div data-state="open" id="advanced-submenu">
                      <ul data-sidebar="menu-sub" className="mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5 group-data-[collapsible=icon]:hidden">
                        <li>
                          <a 
                            href="#" 
                            data-sidebar="menu-sub-button" 
                            data-size="md" 
                            data-active={activeView === 'canvas'}
                            className="flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden"
                            onClick={(e) => {
                              e.preventDefault();
                              handleViewChange('canvas');
                            }}
                          >
                            <Palette className="h-4 w-4" />
                            <span>Canvas Editor</span>
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            data-sidebar="menu-sub-button" 
                            data-size="md" 
                            data-active={activeView === 'workflow'}
                            className="flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden"
                            onClick={(e) => {
                              e.preventDefault();
                              handleViewChange('workflow');
                            }}
                          >
                            <Share2 className="h-4 w-4" />
                            <span>Workflow</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            
            {/* Documentation and Settings */}
            <div data-sidebar="group" className="relative flex w-full min-w-0 flex-col p-2 group-data-[collapsible=icon]:hidden">
              {sidebarOpen && <div data-sidebar="group-label" className="flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0">System</div>}
              <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1">
                <li data-sidebar="menu-item" className="group/menu-item relative group/collapsible" data-state="closed">
                  <button 
                    data-sidebar="menu-button" 
                    data-size="default" 
                    data-active="false" 
                    data-state="closed"
                    className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm"
                  >
                    <BookOpen className="h-5 w-5" />
                    {sidebarOpen && <span>Documentation</span>}
                    {sidebarOpen && <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                  </button>
                </li>
                <li data-sidebar="menu-item" className="group/menu-item relative group/collapsible" data-state="closed">
                  <button 
                    data-sidebar="menu-button" 
                    data-size="default" 
                    data-active={activeView === 'settings'} 
                    data-state="closed"
                    className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm"
                    onClick={() => {
                      console.log('Sidebar: Clicked settings view');
                      handleViewChange('settings');
                    }}
                  >
                    <Settings2 className="h-5 w-5" />
                    {sidebarOpen && <span>Settings</span>}
                    {sidebarOpen && <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 