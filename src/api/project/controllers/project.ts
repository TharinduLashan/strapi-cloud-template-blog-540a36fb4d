/**
 * project controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::project.project",
  ({ strapi }) => ({
    // #1: Basic list
    async listBasic(ctx) {
      const dataRaw = await strapi.db.query("api::project.project").findMany({
        select: ["id", "documentId", "Title", "HoverColor", "ImageRatio"],
        populate: {
          FeaturedImage: {
            select: ["url"],
          },
        },
      });

      const uniqueProjects = dataRaw.filter(
        (project, index, self) =>
          index === self.findIndex((p) => p.documentId === project.documentId)
      );

      ctx.body = { data: uniqueProjects };
    },

    // #2: List with Gallery + Type
    async listWithGallery(ctx) {
      const dataRaw = await strapi.db.query("api::project.project").findMany({
        select: ["id", "documentId", "Title", "Year", "Type"],
        populate: {
          FeaturedImage: { select: ["url"] },
          Gallery: { select: ["url"] },
        },
      });

      const uniqueProjects = dataRaw.filter(
        (project, index, self) =>
          index === self.findIndex((p) => p.documentId === project.documentId)
      );

      ctx.body = { data: uniqueProjects };
    },

    // #3: Get by slug (ID or UID)
    async getBySlug(ctx) {
      const { documentId } = ctx.params;

      const data = await strapi.db.query("api::project.project").findOne({
        where: { documentId: documentId }, // or use `id: Number(slug)` if not using UID
        select: [
          "id",
          "documentId",
          "Title",
          "Content",
          "MainTitle",
          "Description",
          "Type",
          "Size",
          "Year",
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
