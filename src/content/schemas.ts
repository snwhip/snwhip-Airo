import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "name": z.string(),
        "title": z.string(),
        "tagline": z.string(),
        "statement": z.string()
      }),
      "categories": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "description": z.string(),
        "href": z.string()
      })),
      "skills": z.array(z.object({
        "id": z.string(),
        "name": z.string()
      }))
    }),
    writing: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "heading": z.string(),
        "intro": z.string(),
        "confidentialityNote": z.string()
      }),
      "introduction": z.object({
        "heading": z.string(),
        "body": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "description": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "type": z.string(),
          "year": z.string(),
          "description": z.string(),
          "tags": z.array(z.string()),
          "sampleKey": z.string()
        }))
      }))
    }),
    web_digital: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "heading": z.string()
      }),
      "introduction": z.object({
        "heading": z.string(),
        "body": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "description": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "project": z.string(),
          "platform": z.string(),
          "description": z.string(),
          "roles": z.array(z.string()),
          "url": z.string()
        }))
      }))
    }),
    about: z.object({
      "hero": z.object({
        "heading": z.string()
      }),
      "body": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      })),
      "closing": z.string()
    }),
    communications: z.object({
      "hero": z.object({
        "heading": z.string()
      }),
      "body": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      })),
      "cta": z.object({
        "label": z.string(),
        "href": z.string()
      })
    }),
    contact: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "heading": z.string()
      }),
      "intro": z.string(),
      "details": z.object({
        "name": z.string(),
        "location": z.string(),
        "email": z.string(),
        "linkedinLabel": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;