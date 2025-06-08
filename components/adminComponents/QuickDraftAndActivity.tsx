import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const activities = [
  {
    description:
      "Published new blog post: 'Building Scalable Web Applications'",
    time: "2 hours ago",
  },
  {
    description: "Updated portfolio project: 'E-commerce Platform'",
    time: "Yesterday at 4:30 PM",
  },
  {
    description: "Replied to message from Sarah Johnson",
    time: "Yesterday at 2:15 PM",
  },
  {
    description: "Added new project: 'Healthcare Dashboard'",
    time: "2 days ago",
  },
  {
    description: "Updated profile information",
    time: "3 days ago",
  },
];

export default function QuickDraftAndActivity() {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <Card className="bg-gray-950 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Quick Draft</CardTitle>
          <CardDescription className="text-gray-400">
            Create a new blog post draft.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-white">
                Title
              </Label>
              <Input
                id="title"
                placeholder="Post title"
                className="bg-gray-900 border-gray-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="excerpt" className="text-white">
                Excerpt
              </Label>
              <Textarea
                id="excerpt"
                placeholder="Brief description of your post"
                className="min-h-[100px] bg-gray-900 border-gray-800 text-white"
              />
            </div>
            <Button className="bg-silver hover:bg-gray-300 text-black">
              Save Draft
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="bg-gray-950 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Recent Activity</CardTitle>
          <CardDescription className="text-gray-400">
            Your recent actions and updates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-silver"></div>
                <div>
                  <p className="text-sm text-white">{activity.description}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
