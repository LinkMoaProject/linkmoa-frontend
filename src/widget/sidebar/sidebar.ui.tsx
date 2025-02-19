import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/shared/ui/sidebar";

export function LeftSidebar() {
  return (
    <Sidebar side="left" variant="inset" collapsible="offcanvas">
      <SidebarHeader>서비스 로고</SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>개인페이지</SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
