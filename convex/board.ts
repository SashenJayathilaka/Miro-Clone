import { v } from "convex/values";
import { mutation } from "./_generated/server";

const images = [
  "/placeholder/svg1.svg",
  "/placeholder/svg2.svg",
  "/placeholder/svg3.svg",
  "/placeholder/svg4.svg",
  "/placeholder/svg5.svg",
  "/placeholder/svg6.svg",
  "/placeholder/svg7.svg",
  "/placeholder/svg8.svg",
  "/placeholder/svg9.svg",
  "/placeholder/svg10.svg",
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

export const remove = mutation({
  args: { id: v.id("boards") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    await ctx.db.delete(args.id);
  },
});

/* 3.35 */
