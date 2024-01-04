const t=JSON.parse('{"key":"v-3e6dccc8","path":"/zh/Python-notebook/07-dictionary.html","title":"07 Python dictionary","lang":"zh-CN","frontmatter":{"title":"07 Python dictionary","date":"2024-01-03T08:34:18.000Z","author":"Cindy","isOriginal":true,"category":["python notebook"],"tag":["notes","python"],"sticky":false,"star":false,"article":true,"timeline":true,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"description":"1. 如何创建一个电话薄 我们现在有下面的联系人： 姓名 手机号 李雷 123456 韩梅梅 132456 大卫 154389 Mr.Liu 131452 Bornforthis 180595 Alexa 131559","head":[["meta",{"property":"og:url","content":"https://vervevividness.com/zh/Python-notebook/07-dictionary.html"}],["meta",{"property":"og:site_name","content":"王若伊晗的网站"}],["meta",{"property":"og:title","content":"07 Python dictionary"}],["meta",{"property":"og:description","content":"1. 如何创建一个电话薄 我们现在有下面的联系人： 姓名 手机号 李雷 123456 韩梅梅 132456 大卫 154389 Mr.Liu 131452 Bornforthis 180595 Alexa 131559"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vervevividness.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-04T09:46:07.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"07 Python dictionary"}],["meta",{"property":"article:author","content":"Cindy"}],["meta",{"property":"article:tag","content":"notes"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:published_time","content":"2024-01-03T08:34:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-04T09:46:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"07 Python dictionary\\",\\"image\\":[\\"https://vervevividness.com/\\"],\\"datePublished\\":\\"2024-01-03T08:34:18.000Z\\",\\"dateModified\\":\\"2024-01-04T09:46:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cindy\\"}]}"]]},"headers":[{"level":2,"title":"1. 如何创建一个电话薄","slug":"_1-如何创建一个电话薄","link":"#_1-如何创建一个电话薄","children":[]},{"level":2,"title":"2. 字典结构","slug":"_2-字典结构","link":"#_2-字典结构","children":[]},{"level":2,"title":"3. 字典结构 key&Value","slug":"_3-字典结构-key-value","link":"#_3-字典结构-key-value","children":[]},{"level":2,"title":"4. 用字典函数创建字典","slug":"_4-用字典函数创建字典","link":"#_4-用字典函数创建字典","children":[]},{"level":2,"title":"5. 访问字典数据","slug":"_5-访问字典数据","link":"#_5-访问字典数据","children":[{"level":3,"title":"5.1 中括号访问","slug":"_5-1-中括号访问","link":"#_5-1-中括号访问","children":[]},{"level":3,"title":"5.2 上面的提取方法存在的问题","slug":"_5-2-上面的提取方法存在的问题","link":"#_5-2-上面的提取方法存在的问题","children":[]},{"level":3,"title":"5.3 使用 .get() 解决","slug":"_5-3-使用-get-解决","link":"#_5-3-使用-get-解决","children":[]}]},{"level":2,"title":"6. 更新字典的数据","slug":"_6-更新字典的数据","link":"#_6-更新字典的数据","children":[]},{"level":2,"title":"7. 字典的删除","slug":"_7-字典的删除","link":"#_7-字典的删除","children":[]},{"level":2,"title":"8. 字典结构嵌套字典","slug":"_8-字典结构嵌套字典","link":"#_8-字典结构嵌套字典","children":[{"level":3,"title":"8.1 字典列表","slug":"_8-1-字典列表","link":"#_8-1-字典列表","children":[]},{"level":3,"title":"8.2 在字典中存储列表","slug":"_8-2-在字典中存储列表","link":"#_8-2-在字典中存储列表","children":[]},{"level":3,"title":"8.3 在字典中存储字典","slug":"_8-3-在字典中存储字典","link":"#_8-3-在字典中存储字典","children":[]}]},{"level":2,"title":"9. 字典常见方法","slug":"_9-字典常见方法","link":"#_9-字典常见方法","children":[{"level":3,"title":"9.1 .pop(key)","slug":"_9-1-pop-key","link":"#_9-1-pop-key","children":[]},{"level":3,"title":"9.2 .Keys()","slug":"_9-2-keys","link":"#_9-2-keys","children":[]},{"level":3,"title":"9.3 .values()","slug":"_9-3-values","link":"#_9-3-values","children":[]},{"level":3,"title":"9.4 .items()","slug":"_9-4-items","link":"#_9-4-items","children":[]},{"level":3,"title":"9.5 in","slug":"_9-5-in","link":"#_9-5-in","children":[]}]}],"git":{"createdTime":1704274261000,"updatedTime":1704361567000,"contributors":[{"name":"Camcute123","email":"rw757@cam.ac.uk","commits":2}]},"readingTime":{"minutes":6.03,"words":1810},"filePathRelative":"zh/Python-notebook/07-dictionary.md","localizedDate":"2024年1月3日","excerpt":"<h2> 1. 如何创建一个电话薄</h2>\\n<p>我们现在有下面的联系人：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>姓名</th>\\n<th>手机号</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>李雷</td>\\n<td>123456</td>\\n</tr>\\n<tr>\\n<td>韩梅梅</td>\\n<td>132456</td>\\n</tr>\\n<tr>\\n<td>大卫</td>\\n<td>154389</td>\\n</tr>\\n<tr>\\n<td>Mr.Liu</td>\\n<td>131452</td>\\n</tr>\\n<tr>\\n<td>Bornforthis</td>\\n<td>180595</td>\\n</tr>\\n<tr>\\n<td>Alexa</td>\\n<td>131559</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
