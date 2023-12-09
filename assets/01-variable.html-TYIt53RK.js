const e=JSON.parse('{"key":"v-3d681a5c","path":"/zh/Python-notebook/01-variable.html","title":"01 Variable","lang":"zh-CN","frontmatter":{"title":"01 Variable","date":"2023-12-07T08:21:10.000Z","author":"Cindy","isOriginal":true,"category":["python notebook"],"tag":["notes","python"],"sticky":false,"star":false,"article":true,"timeline":true,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"description":"1.理解变量--生活中的例子 1.1 什么是变量 变：变化 量：大小 1.2 一个例子 假如，你是班级当中的课代表，每个月需要统计班级中每个学生的月考成绩。月考成绩会每个月一张纸，每张纸上都会依次记录每个学生的成绩越到成绩，例如： 李雷 98分 马冬梅 89分 刘奕彤 96分 ...... 某一天，老师要看刘奕彤 1月、2月、3月的成绩，这个时候作为课代表的你需要怎么办。——总不能直接把每个月的月考成绩单直接给老师，显然是不合适的。 我们应该把刘奕彤 1月、2月、3月的成绩抄写到单独的一张纸上，接着给老师。 那么，我们为什么不一开始直接为每一个学生分配一个信封呢？（也可以是档案袋）信封在一开始是扁的，当我们放东西（数据）进去之后，是不是鼓起来了？——是不是变化了？是不是有大小了呢？显然是的。 那么信封，是不是在我们当前所处的空间当中开辟空间，来存放数据并且说这是信封。","head":[["meta",{"property":"og:url","content":"https://vervevividness.com/zh/Python-notebook/01-variable.html"}],["meta",{"property":"og:site_name","content":"王若伊晗的网站"}],["meta",{"property":"og:title","content":"01 Variable"}],["meta",{"property":"og:description","content":"1.理解变量--生活中的例子 1.1 什么是变量 变：变化 量：大小 1.2 一个例子 假如，你是班级当中的课代表，每个月需要统计班级中每个学生的月考成绩。月考成绩会每个月一张纸，每张纸上都会依次记录每个学生的成绩越到成绩，例如： 李雷 98分 马冬梅 89分 刘奕彤 96分 ...... 某一天，老师要看刘奕彤 1月、2月、3月的成绩，这个时候作为课代表的你需要怎么办。——总不能直接把每个月的月考成绩单直接给老师，显然是不合适的。 我们应该把刘奕彤 1月、2月、3月的成绩抄写到单独的一张纸上，接着给老师。 那么，我们为什么不一开始直接为每一个学生分配一个信封呢？（也可以是档案袋）信封在一开始是扁的，当我们放东西（数据）进去之后，是不是鼓起来了？——是不是变化了？是不是有大小了呢？显然是的。 那么信封，是不是在我们当前所处的空间当中开辟空间，来存放数据并且说这是信封。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-09T14:41:40.000Z"}],["meta",{"property":"article:author","content":"Cindy"}],["meta",{"property":"article:tag","content":"notes"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:published_time","content":"2023-12-07T08:21:10.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-09T14:41:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01 Variable\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-07T08:21:10.000Z\\",\\"dateModified\\":\\"2023-12-09T14:41:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cindy\\"}]}"]]},"headers":[{"level":2,"title":"1.理解变量--生活中的例子","slug":"_1-理解变量-生活中的例子","link":"#_1-理解变量-生活中的例子","children":[{"level":3,"title":"1.1 什么是变量","slug":"_1-1-什么是变量","link":"#_1-1-什么是变量","children":[]},{"level":3,"title":"1.2 一个例子","slug":"_1-2-一个例子","link":"#_1-2-一个例子","children":[]}]},{"level":2,"title":"2.如何创建变量--赋值语句","slug":"_2-如何创建变量-赋值语句","link":"#_2-如何创建变量-赋值语句","children":[]},{"level":2,"title":"3.探究print","slug":"_3-探究print","link":"#_3-探究print","children":[{"level":3,"title":"3.1 同时输出多个数据","slug":"_3-1-同时输出多个数据","link":"#_3-1-同时输出多个数据","children":[]},{"level":3,"title":"3.2 sep修改多个变量同时输出的间隔","slug":"_3-2-sep修改多个变量同时输出的间隔","link":"#_3-2-sep修改多个变量同时输出的间隔","children":[]},{"level":3,"title":"3.3 end修改print输出结尾方式","slug":"_3-3-end修改print输出结尾方式","link":"#_3-3-end修改print输出结尾方式","children":[]},{"level":3,"title":"3.4 end 和sep可以同时使用","slug":"_3-4-end-和sep可以同时使用","link":"#_3-4-end-和sep可以同时使用","children":[]}]},{"level":2,"title":"4.进阶的赋值方法","slug":"_4-进阶的赋值方法","link":"#_4-进阶的赋值方法","children":[{"level":3,"title":"4.1 多个变量同时赋相同的值","slug":"_4-1-多个变量同时赋相同的值","link":"#_4-1-多个变量同时赋相同的值","children":[]},{"level":3,"title":"4.2 多个变量同时赋不同的值","slug":"_4-2-多个变量同时赋不同的值","link":"#_4-2-多个变量同时赋不同的值","children":[]}]},{"level":2,"title":"practice","slug":"practice","link":"#practice","children":[]},{"level":2,"title":"5.变量的命名规则","slug":"_5-变量的命名规则","link":"#_5-变量的命名规则","children":[]}],"git":{"createdTime":1702080926000,"updatedTime":1702132900000,"contributors":[{"name":"Camcute123","email":"rw757@cam.ac.uk","commits":3}]},"readingTime":{"minutes":5.98,"words":1793},"filePathRelative":"zh/Python-notebook/01-variable.md","localizedDate":"2023年12月7日","excerpt":"<h2> 1.理解变量--生活中的例子</h2>\\n<hr>\\n<h3> 1.1 什么是变量</h3>\\n<ul>\\n<li>变：变化</li>\\n<li>量：大小</li>\\n</ul>\\n<h3> 1.2 一个例子</h3>\\n<p>假如，你是班级当中的课代表，每个月需要统计班级中每个学生的月考成绩。月考成绩会每个月一张纸，每张纸上都会依次记录每个学生的成绩越到成绩，例如：</p>\\n<ol>\\n<li>李雷 98分</li>\\n<li>马冬梅 89分</li>\\n<li>刘奕彤 96分</li>\\n<li>......</li>\\n</ol>\\n<p>某一天，老师要看刘奕彤 1月、2月、3月的成绩，这个时候作为课代表的你需要怎么办。——总不能直接把每个月的月考成绩单直接给老师，显然是不合适的。\\n我们应该把刘奕彤 1月、2月、3月的成绩抄写到单独的一张纸上，接着给老师。\\n那么，我们为什么不一开始直接为每一个学生分配一个信封呢？（也可以是档案袋）信封在一开始是扁的，当我们放东西（数据）进去之后，是不是鼓起来了？——是不是变化了？是不是有大小了呢？显然是的。\\n那么信封，是不是在我们当前所处的空间当中开辟空间，来存放数据并且说这是信封。</p>","autoDesc":true}');export{e as data};
