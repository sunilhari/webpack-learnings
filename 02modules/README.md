# Webpack Basic 01

<pre>
npm install
</pre>

This would install `webpack`,`webpack-cli` and `webpack-bundle-analyzer`

Demo would show how the modules are bundled and how would there size would vary in development and production mode
<pre>
npm run develop
</pre>
![develop output](https://github.com/sunilhari/webpack-learnings/blob/master/02modules/support/develop.PNG)
Here the differnece is worth noticing .if you check the bundle analyzer output below,eventhough we are only using group by from `lodash` it had included all the available `lodash` modules
![develop output](https://github.com/sunilhari/webpack-learnings/blob/master/02modules/support/develop_bundle.PNG)
<pre>
npm run build
</pre>
![production output](https://github.com/sunilhari/webpack-learnings/blob/master/02modules/support/production.PNG)
The bundle size had reduced from 1.41Mb to 17.2Kb.its not just result of minification.The modules that are not used from lodash had been removed or not part of the bundle.Lets confirm it with the bundle analyzer output.
![production output](https://github.com/sunilhari/webpack-learnings/blob/master/02modules/support/production_bundle.PNG)



Bundle analyzer plugin is attached to webpack here to understand what the bundle size is constituted off.

