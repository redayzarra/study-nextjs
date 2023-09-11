import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Props } from "./FollowButton";

export default async function FollowButton({ targetUserId }: Props) {
  const session = await getServerSession(authOptions);
}
