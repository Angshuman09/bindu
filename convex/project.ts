import { mutation, query } from "./_generated/server";
import { v } from 'convex/values';
import { api } from "./_generated/api";
import { Doc, Id } from "./_generated/dataModel";

export const create = mutation({
  args: {
    title: v.string(),
    width: v.number(),
    height: v.number(),
    originalImageUrl: v.optional(v.string()),
    currentImageUrl: v.optional(v.string()),
    thumbnailUrl: v.optional(v.string()),
    canvasState: v.optional(v.any())
  },

  handler: async (ctx, args): Promise<Id<"projects">> => {
    const user: Doc<"users"> = await ctx.runQuery(api.users.getCurrentUser);

    if (user.plan === "free" && user.projectsUsed >= 3) {
      throw new Error("Free plan limited to three projects");
    }

    const now = Date.now();

    const projectId = await ctx.db.insert("projects", {
      title: args.title,
      userId: user._id,
      width: args.width,
      height: args.height,
      originalImageUrl: args.originalImageUrl,
      currentImageUrl: args.currentImageUrl,
      thumbnailUrl: args.thumbnailUrl,
      canvasState: args.canvasState,
      createdAt: now,
      updatedAt: now
    });

    await ctx.db.patch(user._id, {
      projectsUsed: user.projectsUsed + 1,
      lastActiveAt: now,
    });

    return projectId;
  }
});

export const getUserProjects = query({
  handler: async (ctx)=>{
    const user: Doc<"users"> = await ctx.runQuery(api.users.getCurrentUser);

    const projects = await ctx.db.query("projects").withIndex("by_user_updated", (q)=> q.eq("userId", user._id))
    .order("desc")
    .collect();

    return projects;
  }
})

// export const deleteProject = mutation({
//   args:{
//     projectId: v.id("projects")
//   },
//   handler: async (ctx,args)=>{
//     const user: Doc<"users"> = await ctx.runQuery(api.users.getCurrentUser);

//     const project = await ctx.db.get(args.projectId);

//     if(!user || project?.userId !== user._id){
//       throw new Error("Access denied");
//     }

//     ctx.db.delete(args.projectId);

//     await ctx.db.patch(user._id,{
//       projectUsed: Math.max()
//     })
//   }
// })