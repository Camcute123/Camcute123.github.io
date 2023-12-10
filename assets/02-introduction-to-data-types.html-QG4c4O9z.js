const t=JSON.parse(`{"key":"v-43e7c804","path":"/zh/Python-notebook/02-introduction-to-data-types.html","title":"02 Introduction to Tata Types","lang":"zh-CN","frontmatter":{"title":"02 Introduction to Tata Types","date":"2023-12-09T23:10:30.000Z","author":"Cindy","isOriginal":true,"category":["python notebook"],"tag":["notes","python"],"sticky":false,"star":false,"article":true,"timeline":true,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"description":"数据类型 image-20231209231442947 1.数字型「int, float」 1.1代码示例 整形 int_num = 1 t = type(int_num) print(int_num) print(\\"int num type is: &gt;&gt;&gt;\\", t) print(\\"直接检测数据类型并输出\\", type(int_num)) #output 1 int num type is: &gt;&gt;&gt; &lt;class 'int'&gt; 直接检测数据类型并输出 &lt;class 'int'&gt;","head":[["meta",{"property":"og:url","content":"https://vervevividness.com/zh/Python-notebook/02-introduction-to-data-types.html"}],["meta",{"property":"og:site_name","content":"王若伊晗的网站"}],["meta",{"property":"og:title","content":"02 Introduction to Tata Types"}],["meta",{"property":"og:description","content":"数据类型 image-20231209231442947 1.数字型「int, float」 1.1代码示例 整形 int_num = 1 t = type(int_num) print(int_num) print(\\"int num type is: &gt;&gt;&gt;\\", t) print(\\"直接检测数据类型并输出\\", type(int_num)) #output 1 int num type is: &gt;&gt;&gt; &lt;class 'int'&gt; 直接检测数据类型并输出 &lt;class 'int'&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vervevividness.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-10T00:11:50.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"02 Introduction to Tata Types"}],["meta",{"property":"article:author","content":"Cindy"}],["meta",{"property":"article:tag","content":"notes"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:published_time","content":"2023-12-09T23:10:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-10T00:11:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02 Introduction to Tata Types\\",\\"image\\":[\\"https://vervevividness.com/\\"],\\"datePublished\\":\\"2023-12-09T23:10:30.000Z\\",\\"dateModified\\":\\"2023-12-10T00:11:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cindy\\"}]}"]]},"headers":[{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":2,"title":"1.数字型「int, float」","slug":"_1-数字型「int-float」","link":"#_1-数字型「int-float」","children":[{"level":3,"title":"1.1代码示例","slug":"_1-1代码示例","link":"#_1-1代码示例","children":[]}]},{"level":2,"title":"2.字符串「str」","slug":"_2-字符串「str」","link":"#_2-字符串「str」","children":[{"level":3,"title":"2.1 代码示例","slug":"_2-1-代码示例","link":"#_2-1-代码示例","children":[]},{"level":3,"title":"2.2 字符串的三大特性","slug":"_2-2-字符串的三大特性","link":"#_2-2-字符串的三大特性","children":[]}]},{"level":2,"title":"3. 列表","slug":"_3-列表","link":"#_3-列表","children":[{"level":3,"title":"3.1 代码示例","slug":"_3-1-代码示例","link":"#_3-1-代码示例","children":[]},{"level":3,"title":"3.2 列表的三大特性","slug":"_3-2-列表的三大特性","link":"#_3-2-列表的三大特性","children":[]}]},{"level":2,"title":"4. 元组「tuple」","slug":"_4-元组「tuple」","link":"#_4-元组「tuple」","children":[{"level":3,"title":"4.1 代码示例","slug":"_4-1-代码示例","link":"#_4-1-代码示例","children":[]}]},{"level":2,"title":"5. 探究👀列表&元组","slug":"_5-探究👀列表-元组","link":"#_5-探究👀列表-元组","children":[]},{"level":2,"title":"6. 字典「dict」","slug":"_6-字典「dict」","link":"#_6-字典「dict」","children":[{"level":3,"title":"6.1 代码示例","slug":"_6-1-代码示例","link":"#_6-1-代码示例","children":[]},{"level":3,"title":"6.2 字典的特性","slug":"_6-2-字典的特性","link":"#_6-2-字典的特性","children":[]}]}],"git":{"createdTime":1702167110000,"updatedTime":1702167110000,"contributors":[{"name":"Camcute123","email":"rw757@cam.ac.uk","commits":1}]},"readingTime":{"minutes":5.74,"words":1721},"filePathRelative":"zh/Python-notebook/02-introduction-to-data-types.md","localizedDate":"2023年12月9日","excerpt":"<h2> 数据类型</h2>\\n<figure><figcaption>image-20231209231442947</figcaption></figure>\\n<h2> 1.数字型「int, float」</h2>\\n<h3> 1.1代码示例</h3>\\n<ol>\\n<li>整形</li>\\n</ol>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>int_num <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span>\\nt <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">type</span><span class=\\"token punctuation\\">(</span>int_num<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>int_num<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"int num type is: &gt;&gt;&gt;\\"</span><span class=\\"token punctuation\\">,</span> t<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"直接检测数据类型并输出\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">type</span><span class=\\"token punctuation\\">(</span>int_num<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">#output</span>\\n<span class=\\"token number\\">1</span>\\n<span class=\\"token builtin\\">int</span> num <span class=\\"token builtin\\">type</span> <span class=\\"token keyword\\">is</span><span class=\\"token punctuation\\">:</span> <span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">class</span> <span class=\\"token string\\">'int'</span><span class=\\"token operator\\">&gt;</span>\\n直接检测数据类型并输出 <span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">class</span> <span class=\\"token string\\">'int'</span><span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
