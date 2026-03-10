import { useState } from "react";
import {
  LayoutDashboard,
  Plug,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
  FileSpreadsheet,
  Activity,
  Bell,
  Search,
  HelpCircle,
  Plus,
  Pencil,
  Trash2,
  Users,
  Briefcase,
  Building2,
  TicketCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", id: "overview", path: "/dashboard" },
  { icon: Plug, label: "Integrations", id: "integrations", path: "/dashboard/integrations" },
  { icon: BarChart3, label: "Analytics", id: "analytics", path: "/dashboard" },
  { icon: CreditCard, label: "Billing", id: "billing", path: "/dashboard" },
  { icon: Settings, label: "Settings", id: "settings", path: "/dashboard" },
];

interface SheetEntry {
  id: string;
  name: string;
  url: string;
  addedAt: string;
}

interface HubSpotObject {
  id: string;
  name: string;
  type: "contact" | "company" | "deal" | "ticket";
  icon: typeof Users;
  count: number;
  lastSync: string;
}

const defaultHubSpotObjects: HubSpotObject[] = [
  { id: "1", name: "Contacts", type: "contact", icon: Users, count: 12847, lastSync: "2 min ago" },
  { id: "2", name: "Companies", type: "company", icon: Building2, count: 3421, lastSync: "15 min ago" },
  { id: "3", name: "Deals", type: "deal", icon: Briefcase, count: 891, lastSync: "1 hour ago" },
  { id: "4", name: "Tickets", type: "ticket", icon: TicketCheck, count: 234, lastSync: "30 min ago" },
];

const DashboardIntegrations = () => {
  const navigate = useNavigate();

  // Google Sheets state
  const [sheets, setSheets] = useState<SheetEntry[]>([
    { id: "1", name: "Q1 Lead Report", url: "https://docs.google.com/spreadsheets/d/abc123", addedAt: "Mar 5, 2026" },
    { id: "2", name: "Contact Export", url: "https://docs.google.com/spreadsheets/d/def456", addedAt: "Mar 8, 2026" },
  ]);
  const [sheetInput, setSheetInput] = useState("");
  const [sheetNameInput, setSheetNameInput] = useState("");
  const [editingSheet, setEditingSheet] = useState<SheetEntry | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingSheet, setDeletingSheet] = useState<SheetEntry | null>(null);

  // HubSpot state
  const [hubspotObjects, setHubspotObjects] = useState<HubSpotObject[]>(defaultHubSpotObjects);
  const [editingHubspot, setEditingHubspot] = useState<HubSpotObject | null>(null);
  const [hubspotEditDialogOpen, setHubspotEditDialogOpen] = useState(false);
  const [hubspotDeleteDialogOpen, setHubspotDeleteDialogOpen] = useState(false);
  const [deletingHubspot, setDeletingHubspot] = useState<HubSpotObject | null>(null);
  const [hubspotEditName, setHubspotEditName] = useState("");

  // Google Sheets handlers
  const handleAddSheet = () => {
    if (!sheetInput.trim()) return;
    const newSheet: SheetEntry = {
      id: Date.now().toString(),
      name: sheetNameInput.trim() || `Sheet ${sheets.length + 1}`,
      url: sheetInput.trim(),
      addedAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };
    setSheets((prev) => [...prev, newSheet]);
    setSheetInput("");
    setSheetNameInput("");
  };

  const handleEditSheet = () => {
    if (!editingSheet) return;
    setSheets((prev) =>
      prev.map((s) => (s.id === editingSheet.id ? editingSheet : s))
    );
    setEditDialogOpen(false);
    setEditingSheet(null);
  };

  const handleDeleteSheet = () => {
    if (!deletingSheet) return;
    setSheets((prev) => prev.filter((s) => s.id !== deletingSheet.id));
    setDeleteDialogOpen(false);
    setDeletingSheet(null);
  };

  // HubSpot handlers
  const handleEditHubspot = () => {
    if (!editingHubspot) return;
    setHubspotObjects((prev) =>
      prev.map((o) => (o.id === editingHubspot.id ? { ...editingHubspot, name: hubspotEditName } : o))
    );
    setHubspotEditDialogOpen(false);
    setEditingHubspot(null);
  };

  const handleDeleteHubspot = () => {
    if (!deletingHubspot) return;
    setHubspotObjects((prev) => prev.filter((o) => o.id !== deletingHubspot.id));
    setHubspotDeleteDialogOpen(false);
    setDeletingHubspot(null);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-card">
        <div className="p-6">
          <h1 className="text-lg font-bold text-foreground">QuickCRM</h1>
          <p className="text-xs text-muted-foreground mt-0.5">Chrome Extension</p>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.id === "integrations"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-3 mt-auto">
          <Separator className="mb-3" />
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-semibold text-primary">JS</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Jane Smith</p>
              <p className="text-xs text-muted-foreground truncate">jane@company.com</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors mt-1">
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Integrations</h2>
            <p className="text-sm text-muted-foreground">Manage your connected services and data sources</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9 w-56 h-9" />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-destructive rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </div>
        </header>

        <div className="p-6 space-y-8 max-w-5xl">
          {/* ===== Google Sheets Section ===== */}
          <section>
            <Card className="border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-success/10 flex items-center justify-center">
                    <FileSpreadsheet className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Google Sheets</CardTitle>
                    <CardDescription>Add spreadsheet URLs to sync CRM data</CardDescription>
                  </div>
                  <Badge variant="outline" className="ml-auto text-xs text-muted-foreground">
                    {sheets.length} sheet{sheets.length !== 1 ? "s" : ""}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Add sheet form */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 space-y-1">
                    <Label htmlFor="sheet-name" className="text-xs text-muted-foreground">Sheet Name</Label>
                    <Input
                      id="sheet-name"
                      placeholder="e.g. Q1 Lead Report"
                      value={sheetNameInput}
                      onChange={(e) => setSheetNameInput(e.target.value)}
                      className="h-9"
                    />
                  </div>
                  <div className="flex-[2] space-y-1">
                    <Label htmlFor="sheet-url" className="text-xs text-muted-foreground">Spreadsheet URL</Label>
                    <Input
                      id="sheet-url"
                      placeholder="https://docs.google.com/spreadsheets/d/..."
                      value={sheetInput}
                      onChange={(e) => setSheetInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAddSheet()}
                      className="h-9"
                    />
                  </div>
                  <div className="flex items-end">
                    <Button size="sm" onClick={handleAddSheet} disabled={!sheetInput.trim()} className="h-9">
                      <Plus className="h-3.5 w-3.5 mr-1.5" />
                      Add
                    </Button>
                  </div>
                </div>

                {/* Sheets list */}
                {sheets.length > 0 ? (
                  <div className="rounded-lg border border-border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="text-xs">Name</TableHead>
                          <TableHead className="text-xs hidden sm:table-cell">URL</TableHead>
                          <TableHead className="text-xs hidden md:table-cell">Added</TableHead>
                          <TableHead className="text-xs text-right w-[100px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sheets.map((sheet) => (
                          <TableRow key={sheet.id}>
                            <TableCell className="font-medium text-sm">{sheet.name}</TableCell>
                            <TableCell className="text-sm text-muted-foreground hidden sm:table-cell max-w-[200px] truncate">
                              {sheet.url}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground hidden md:table-cell">{sheet.addedAt}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                                  onClick={() => {
                                    setEditingSheet({ ...sheet });
                                    setEditDialogOpen(true);
                                  }}
                                >
                                  <Pencil className="h-3.5 w-3.5" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                  onClick={() => {
                                    setDeletingSheet(sheet);
                                    setDeleteDialogOpen(true);
                                  }}
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-8 text-sm text-muted-foreground">
                    No sheets added yet. Paste a Google Sheets URL above to get started.
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          {/* ===== HubSpot Section ===== */}
          <section>
            <Card className="border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-base">HubSpot</CardTitle>
                    <CardDescription>CRM objects synced from your HubSpot account</CardDescription>
                  </div>
                  <Badge variant="outline" className="ml-auto text-xs text-success border-success/30 bg-success/5">
                    Connected
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {hubspotObjects.length > 0 ? (
                  <div className="rounded-lg border border-border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="text-xs">Object</TableHead>
                          <TableHead className="text-xs hidden sm:table-cell">Records</TableHead>
                          <TableHead className="text-xs hidden md:table-cell">Last Sync</TableHead>
                          <TableHead className="text-xs text-right w-[100px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {hubspotObjects.map((obj) => (
                          <TableRow key={obj.id}>
                            <TableCell>
                              <div className="flex items-center gap-2.5">
                                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                  <obj.icon className="h-4 w-4 text-accent" />
                                </div>
                                <span className="font-medium text-sm">{obj.name}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground hidden sm:table-cell">
                              {obj.count.toLocaleString()}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground hidden md:table-cell">{obj.lastSync}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                                  onClick={() => {
                                    setEditingHubspot({ ...obj });
                                    setHubspotEditName(obj.name);
                                    setHubspotEditDialogOpen(true);
                                  }}
                                >
                                  <Pencil className="h-3.5 w-3.5" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                  onClick={() => {
                                    setDeletingHubspot(obj);
                                    setHubspotDeleteDialogOpen(true);
                                  }}
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-8 text-sm text-muted-foreground">
                    No CRM objects configured. Connect your HubSpot account to get started.
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* ===== Dialogs ===== */}

      {/* Edit Sheet Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Sheet</DialogTitle>
            <DialogDescription>Update the name or URL for this sheet.</DialogDescription>
          </DialogHeader>
          {editingSheet && (
            <div className="space-y-4 py-2">
              <div className="space-y-1.5">
                <Label htmlFor="edit-name">Name</Label>
                <Input
                  id="edit-name"
                  value={editingSheet.name}
                  onChange={(e) => setEditingSheet({ ...editingSheet, name: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="edit-url">URL</Label>
                <Input
                  id="edit-url"
                  value={editingSheet.url}
                  onChange={(e) => setEditingSheet({ ...editingSheet, url: e.target.value })}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleEditSheet}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Sheet Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove Sheet</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove <span className="font-medium text-foreground">{deletingSheet?.name}</span>? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleDeleteSheet}>Remove</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit HubSpot Object Dialog */}
      <Dialog open={hubspotEditDialogOpen} onOpenChange={setHubspotEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit CRM Object</DialogTitle>
            <DialogDescription>Update the display name for this object.</DialogDescription>
          </DialogHeader>
          <div className="space-y-1.5 py-2">
            <Label htmlFor="edit-hubspot-name">Name</Label>
            <Input
              id="edit-hubspot-name"
              value={hubspotEditName}
              onChange={(e) => setHubspotEditName(e.target.value)}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleEditHubspot}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete HubSpot Object Dialog */}
      <Dialog open={hubspotDeleteDialogOpen} onOpenChange={setHubspotDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove CRM Object</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove <span className="font-medium text-foreground">{deletingHubspot?.name}</span>? This will stop syncing this object.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleDeleteHubspot}>Remove</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardIntegrations;
