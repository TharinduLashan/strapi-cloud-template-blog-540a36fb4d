export default {
  routes: [
    {
      method: "GET",
      path: "/projects/list-basic",
      handler: "project.listBasic",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/projects/list-gallery",
      handler: "project.listWithGallery",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/projects/:slug/details",
      handler: "project.getBySlug",
      config: {
        auth: false,
      },
    },
  ],
};
