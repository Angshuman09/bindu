import { internalAction, mutation } from "./_generated/server";
import { v } from 'convex/values';
import { api } from "./_generated/api";

const create = mutation({
    args: {
        title: v.string(),
        width: v.number(),
        height: v.number(),
        originalImageUrl: v.optional(v.string()),
        currentImageUrl: v.optional(v.string()), 
        thumnailUrl: v.optional(v.string()),
        canvasState: v.optional(v.any())
    },
    handler: async (ctx, args) => {
        const user = await ctx.runQuery(api.users.getCurrentUser);

        if(user.plan == "free"){
            const projectCount = await ctx.db.query("projects")
            .withIndex("by_user", (q)=>q.eq("userId", user._id))
            .collect();

            if(projectCount.length>=3){
                throw new Error("Free plan limited to three projects, upgrade to pro for unlimited projects");
            }
        }

        const projectId = await ctx.db.insert("projects",{
            title: args.title,
            userId: user._id,
            width: args.width,
            height: args.height,
            originalImageUrl: args.originalImageUrl,
            currentImageUrl: args.currentImageUrl,
            thumnailUrl: args.thumnailUrl,
            canvasState: args.canvasState,
            createdAt: Date.now(),
            updatedAt: Date.now()
        })

        //updating user's project
        await ctx.db.patch(user._id, {
            projectsUsed: user.projectsUsed + 1,
            lastActiveAt: Date.now(),
        });

        return projectId;
    }
})