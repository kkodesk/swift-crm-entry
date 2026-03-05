import { useState } from "react";
import {
  LayoutDashboard,
  Plug,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
  ChevronRight,
  ExternalLink,
  Check,
  Zap,
  TrendingUp,
  Users,
  Activity,
  Bell,
  Search,
  HelpCircle,
  FileSpreadsheet,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

// Mock data
const tokenUsageData = [
  { date: "Jan", tokens: 1200 },
  { date: "Feb", tokens: 2100 },
  { date: "Mar", tokens: 3400 },
  { date: "Apr", tokens: 2800 },
  { date: "May", tokens: 4200 },
  { date: "Jun", tokens: 5100 },
  { date: "Jul", tokens: 4800 },
];

const dailyUsageData = [
  { day: "Mon", tokens: 320 },
  { day: "Tue", tokens: 480 },
  { day: "Wed", tokens: 290 },
  { day: "Thu", tokens: 510 },
  { day: "Fri", tokens: 420 },
  { day: "Sat", tokens: 180 },
  { day: "Sun", tokens: 90 },
];

const chartConfig = {
  tokens: {
    label: "Tokens Used",
    color: "hsl(var(--accent))",
  },
};

const barChartConfig = {
  tokens: {
    label: "Tokens",
    color: "hsl(var(--primary))",
  },
};

const navItems = [
  { icon: LayoutDashboard, label: "Overview", id: "overview" },
  { icon: Plug, label: "Integrations", id: "integrations" },
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: CreditCard, label: "Billing", id: "billing" },
  { icon: Settings, label: "Settings", id: "settings" },
];

const recentActivity = [
  { action: "Synced 142 contacts", source: "HubSpot", time: "2 min ago", status: "success" },
  { action: "Exported pipeline report", source: "Google Sheets", time: "1 hour ago", status: "success" },
  { action: "API rate limit warning", source: "System", time: "3 hours ago", status: "warning" },
  { action: "New leads imported", source: "HubSpot", time: "5 hours ago", status: "success" },
];

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("overview");
  const [googleSheetsConnected, setGoogleSheetsConnected] = useState(false);
  const [hubspotConnected, setHubspotConnected] = useState(true);

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
              onClick={() => setActiveNav(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeNav === item.id
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
        {/* Top bar */}
        <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-foreground capitalize">{activeNav}</h2>
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

        <div className="p-6 space-y-8 max-w-6xl">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Total Contacts Synced", value: "12,847", change: "+12%", icon: Users, trend: "up" },
              { label: "Tokens Used (Month)", value: "4,800", change: "48%", icon: Zap, trend: "neutral" },
              { label: "Active Integrations", value: "1 / 2", change: "", icon: Plug, trend: "neutral" },
              { label: "Pipeline Value", value: "$284K", change: "+8%", icon: TrendingUp, trend: "up" },
            ].map((stat) => (
              <Card key={stat.label} className="border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  {stat.change && (
                    <p className="text-xs text-success mt-1 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {stat.change} from last month
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Integrations Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Integrations</h3>
                <p className="text-sm text-muted-foreground">Connect your tools to sync data automatically</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Google Sheets */}
              <Card className="border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                      <FileSpreadsheet className="h-6 w-6 text-success" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">Google Sheets</h4>
                        {googleSheetsConnected ? (
                          <Badge variant="outline" className="text-success border-success/30 bg-success/5 text-xs">
                            <Check className="h-3 w-3 mr-1" />
                            Connected
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-muted-foreground text-xs">
                            Not connected
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Export CRM data, create reports, and sync contacts directly to your spreadsheets.
                      </p>
                      {googleSheetsConnected ? (
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
                            Sync Now
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <Settings className="h-3.5 w-3.5 mr-1.5" />
                            Configure
                          </Button>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => setGoogleSheetsConnected(true)}
                        >
                          Connect
                          <ChevronRight className="h-3.5 w-3.5 ml-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* HubSpot */}
              <Card className="border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Activity className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">HubSpot</h4>
                        {hubspotConnected ? (
                          <Badge variant="outline" className="text-success border-success/30 bg-success/5 text-xs">
                            <Check className="h-3 w-3 mr-1" />
                            Connected
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-muted-foreground text-xs">
                            Not connected
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Bi-directional sync with HubSpot CRM — contacts, deals, and pipeline data.
                      </p>
                      {hubspotConnected ? (
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
                            Sync Now
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <Settings className="h-3.5 w-3.5 mr-1.5" />
                            Configure
                          </Button>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => setHubspotConnected(true)}
                        >
                          Connect
                          <ChevronRight className="h-3.5 w-3.5 ml-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Analytics Section - Token Usage */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Token Usage</h3>
                <p className="text-sm text-muted-foreground">Track your AI token consumption over time</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                Export
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Main chart */}
              <Card className="border-border/50 lg:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Monthly Token Usage</CardTitle>
                  <CardDescription>Total tokens consumed per month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[260px] w-full">
                    <AreaChart data={tokenUsageData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="tokenGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis dataKey="date" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                      <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="tokens"
                        stroke="hsl(var(--accent))"
                        strokeWidth={2}
                        fill="url(#tokenGradient)"
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Daily breakdown */}
              <Card className="border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">This Week</CardTitle>
                  <CardDescription>Daily token breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={barChartConfig} className="h-[260px] w-full">
                    <BarChart data={dailyUsageData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis dataKey="day" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                      <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="tokens" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Billing Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Billing</h3>
                <p className="text-sm text-muted-foreground">Manage your subscription and usage</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Current Plan */}
              <Card className="border-border/50 lg:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-semibold text-foreground">Pro Plan</h4>
                        <Badge className="bg-primary/10 text-primary border-0 text-xs">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">$29/month · Billed monthly</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change Plan
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Token Usage</span>
                        <span className="font-medium text-foreground">4,800 / 10,000</span>
                      </div>
                      <Progress value={48} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Contacts Synced</span>
                        <span className="font-medium text-foreground">12,847 / 50,000</span>
                      </div>
                      <Progress value={26} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Integrations</span>
                        <span className="font-medium text-foreground">1 / 5</span>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Info */}
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-5">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Payment Method</h4>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                      <div className="h-8 w-12 rounded bg-foreground/10 flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">•••• 4242</p>
                        <p className="text-xs text-muted-foreground">Expires 12/26</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Next Invoice</h4>
                    <p className="text-2xl font-bold text-foreground">$29.00</p>
                    <p className="text-xs text-muted-foreground">Due April 1, 2026</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Update Card
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Invoices
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Recent Activity */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
                <p className="text-sm text-muted-foreground">Latest sync events and system notifications</p>
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                View All
                <ChevronRight className="h-3.5 w-3.5 ml-1" />
              </Button>
            </div>
            <Card className="border-border/50">
              <CardContent className="p-0">
                {recentActivity.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 ${
                      index < recentActivity.length - 1 ? "border-b border-border/50" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          item.status === "success" ? "bg-success" : "bg-destructive"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.action}</p>
                        <p className="text-xs text-muted-foreground">{item.source}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
