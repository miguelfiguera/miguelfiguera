import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-gray-950 border-gray-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-400">
            Total Views
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">24,532</div>
          <p className="text-xs text-green-500">+12% from last month</p>
        </CardContent>
      </Card>
      <Card className="bg-gray-950 border-gray-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-400">
            Blog Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">12</div>
          <p className="text-xs text-green-500">+2 new this month</p>
        </CardContent>
      </Card>
      <Card className="bg-gray-950 border-gray-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-400">
            Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">8</div>
          <p className="text-xs text-green-500">+1 new this month</p>
        </CardContent>
      </Card>
      <Card className="bg-gray-950 border-gray-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-400">
            Messages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">5</div>
          <p className="text-xs text-yellow-500">3 unread</p>
        </CardContent>
      </Card>
    </div>
  );
}
