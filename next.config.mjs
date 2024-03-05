import { pluginoptions } from '@mightymeld/runtime';

const nextConfig = {
    experimental: {
        swcPlugins: [['@mightymeld/runtime/swc-plugin-mightymeld', pluginoptions()]]
    }
};

export default process.env.MIGHTYMELD ? nextConfig : {};