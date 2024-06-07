import { v } from "convex/values";
import { mutation } from "./_generated/server";

const images = [
  "/placeholder/svg1",
  "/placeholder/svg2",
  "/placeholder/svg3",
  "/placeholder/svg4",
  "/placeholder/svg5",
  "/placeholder/svg6",
  "/placeholder/svg7",
  "/placeholder/svg8",
  "/placeholder/svg9",
  "/placeholder/svg10",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authName: identity.name!,
      imageUrl: randomImage,
    });

    return board;
  },
});

/* 02.30 */
