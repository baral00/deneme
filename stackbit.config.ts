import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '20',
    devCommand: 'npm run dev',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content/pages'],
            models: [
                {
                    name: 'Page',
                    type: 'page',
                    urlPath: '/{slug}',
                    filePath: 'content/pages/{slug}.md',
                    fields: [
                        { name: 'title', type: 'string', required: true },
                        { name: 'heading', type: 'string', default: 'Welcome' },
                        { name: 'description', type: 'text' }
                    ]
                }
            ],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ]
});
