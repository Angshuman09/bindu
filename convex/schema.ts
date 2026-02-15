import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // user table
users: defineTable({
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(),
    imageUrl: v.optional(v.string()),
    plan: v.union(v.literal("free"), v.literal("pro")),
    projectsUsed: v.number(),
    exportThisMonth: v.number(),
    createdAt: v.number(),
    lastActiveAt: v.number(),
  }).index("by_token", ["tokenIdentifier"])
  .index("by_email", ['email'])
  .searchIndex("search_name", {searchField: "name"})
  .searchIndex("search_email",{searchField:"email"}),

  // project table
projects: defineTable({
  title: v.string(),
  userId: v.id("users"), //foreign key

  //canvas dimensions and state
  canvasState: v.any(),
  width: v.number(),
  height: v.number(),

  //image pipeline
  originalImageUrl: v.optional(v.string()), // just uploaded image
  currentImageUrl: v.optional(v.string()), // image after transformation
  thumbnailUrl: v.optional(v.string()),

  //imagekit transformation state
  activeTransformations: v.optional(v.string()), //current imagekit Url params

  isbackgroundRemoved: v.optional(v.boolean()),

  folderId: v.optional(v.id("folders")),

  createdAt: v.number(),
  updatedAt: v.number(),
})
.index("by_user",["userId"])
.index("by_user_updated", ["userId","updatedAt"])
.index("by_folder",["folderId"]),

// folders table
folders: defineTable({
  name: v.string(),
  userId: v.id("users"),
  createdAt: v.number()
})
.index("by_user",["userId"])
})