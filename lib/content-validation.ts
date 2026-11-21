import { z } from 'zod';
import { defaultContent, type PortfolioContent } from './content-defaults';

const linkKeys = /^(href|url|cv|cvFile|image|cover|pipelineImage|github|githubLink|linkedin|website|demo|demoLink|phoneHref)$/;
export function safeUrl(value: string) {
  if (!value) return true;
  if (value.startsWith('/') && !value.startsWith('//') && !/[\\\u0000-\u0020]/.test(value)) return true;
  try { const u = new URL(value); return ['https:', 'mailto:', 'tel:'].includes(u.protocol) && !u.username && !u.password; } catch { return false; }
}
function shape(value: unknown, key = ''): z.ZodType {
  if (typeof value === 'string') return z.string().max(30000).refine(v => !linkKeys.test(key) || safeUrl(v), 'Use a relative path or an https, mailto or tel URL.');
  if (Array.isArray(value)) {
    const sample = value[0] ?? { image: '', caption: '' };
    if (sample && typeof sample === 'object' && !Array.isArray(sample) && value.length) {
      const keys = Array.from(new Set(value.flatMap(v => Object.keys(v))));
      const fields = Object.fromEntries(keys.map(k => {
        const entry = value.find(v => k in v)[k];
        const schema = shape(entry, k);
        return [k, value.every(v => k in v) ? schema : schema.optional()];
      }));
      return z.array(z.object(fields).strict()).max(150);
    }
    return z.array(shape(sample)).max(150);
  }
  if (value && typeof value === 'object') return z.object(Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v, k)]))).strict();
  throw new Error('Unsupported content field');
}
export const contentSchema = shape(defaultContent).superRefine((input, ctx) => {
  const c = input as PortfolioContent;
  for (const key of ['projectDetails', 'researchDetails'] as const) {
    const seen = new Set<string>();
    c[key].forEach((entry, i) => {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.slug) || seen.has(entry.slug)) ctx.addIssue({code:'custom',path:[key,i,'slug'],message:'Use a unique lowercase URL slug.'});
      seen.add(entry.slug);
      entry.gallery.forEach((image, n) => { if (!image.image) ctx.addIssue({code:'custom',path:[key,i,'gallery',n,'image'],message:'Choose an image or remove this gallery entry.'}); });
    });
  }
});
export function validateContent(value: unknown): PortfolioContent { return contentSchema.parse(value) as PortfolioContent; }
