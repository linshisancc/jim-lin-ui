import { defineConfig } from 'dumi';

const base = '/jim-lin-ui';
const publicPath = '/jim-lin-ui/';

const isPreview = process.env.SITE_BUILD_ENV === 'PREVIEW';

const baseConfig = {
  title: 'Happy UI', // 站点名称
  mode: 'site',
  outputPath: 'doc-site', // 输出文件夹
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  base,
  publicPath,
  themeConfig: {
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: {
      // umi-hd 的 750 高清方案（默认值）
      // rules: [{ mode: 'vw', options: [100, 750] }],
      // 根据不同的设备屏幕宽度断点切换高清方案
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/1.x/packages/theme-mobile/src/typings/config.d.ts#L7
    }
  }
};

export default defineConfig(isPreview ? { ...baseConfig, base, publicPath } : baseConfig);
