/**
 * project controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::project.project",
  ({ strapi }) => ({
    // #1: Basic list
    async listBasic(ctx) {
      const data = await strapi.db.query("api::project.project").findMany({
        select: ["id", "Title", "HoverColor", "ImageRatio"],
        populate: {
          FeaturedImage: {
            select: ["url"],
          },
        },
      });

      ctx.body = { data };
    },

    // #2: List with Gallery + Type
    async listWithGallery(ctx) {
      const data = await strapi.db.query("api::project.project").findMany({
        select: ["id", "Title", "Type"],
        populate: {
          FeaturedImage: { select: ["url"] },
          Gallery: { select: ["url"] },
        },
      });

      ctx.body = { data };
    },

    // #3: Get by slug (ID or UID)
    async getBySlug(ctx) {
      const { slug } = ctx.params;

      const data = await strapi.db.query("api::project.project").findOne({
        where: { slug }, // or use `id: Number(slug)` if not using UID
        select: [
          "id",
          "Title",
          "Content",
          "MainTitle",
          "Description",
          "Type",
          "Size",
          "ProjectTeam",
          "RenderedServices",
          "Photography",
        ],
        populate: {
          FeaturedImage: { select: ["url"] },
          Gallery: { select: ["url"] },
        },
      });

      if (!data) return ctx.notFound("Project not found");
      ctx.body = { data };
    },
  })
);
