import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as e}from"./app-iMVcMPKs.js";const p={},o=e(`<div style="text-align:center;"><h1 id="variable-print" tabindex="-1"><a class="header-anchor" href="#variable-print" aria-hidden="true">#</a> Variable &amp; Print</h1></div><h2 id="_1-概念题" tabindex="-1"><a class="header-anchor" href="#_1-概念题" aria-hidden="true">#</a> 1. 概念题</h2><blockquote><p>此题属于概念性问题，没有明确的答案标准，请您根据你所学的知识进行回答。</p></blockquote><ol><li><p>在 Python 中，<code>print</code> 函数是用来做什么的？</p><p>输出/打印出代码运行结果</p></li><li><p>如何在 Python 中声明一个变量？请给出一个例子。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a_b_c1 <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如何在 Python 中进行多个变量同时赋值相同的值？请给出一个例子。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如何在 Python 中进行多个变量同时赋值不同的值？请给出一个例子。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在 Python 中，如果我们想要在一行中打印多个变量，应该怎么做？请给出一个例子。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>什么是 Python 中的注释？怎么写注释？</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 这是一行注释</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在 Python 中，我们如何改变 <code>print</code> 函数中的 <code>sep</code> 参数，以改变多个变量的输出间隔？请给出一个例子。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> sep <span class="token operator">=</span> <span class="token string">&#39;hahaha&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 Python 中 print 的 end 作用是什么？编写个代码示例。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#end 的作用是改变输出时的结尾结束方式</span>
a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token string">&#39;/n/n&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;
1


1
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 Python 中，如果我们要覆盖一个变量的值，应该怎么做？请给出一个例子。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
a <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment">#1</span>
<span class="token comment">#2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 Python 中，我们怎么样才能让计算机“看不见”一行代码？</p><p>可以对当行代码进行注释</p></li><li><p>当我们用 <code>print</code> 函数同时输出多个变量时，默认的间隔符是什么？</p><p>是一个空格——— sep=‘ ’</p></li><li><p>在 Python 中，一个变量可以存储什么样的数据？请给出至少三个例子。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">#integer</span>
b <span class="token operator">=</span> <span class="token number">1.45</span> <span class="token comment">#float</span>
c <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token comment">#string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在编写代码中，为什么要适当的加上空格？空格对代码有影响吗？</p><p>增加代码的可读性，使代码更加规范</p><p>空格对代码没有影响</p></li><li><p>变量命名为什么推荐：“见名知意”？</p><p>方便检查</p><p>便于理解</p></li></ol><p>这些问题主要围绕 Python 中的变量声明、赋值、输出，以及注释的使用等基础概念展开，帮助你更好地理解和巩固这些概念。</p><h2 id="_2-选择题" tabindex="-1"><a class="header-anchor" href="#_2-选择题" aria-hidden="true">#</a> 2. 选择题</h2><ol><li><p>Python 变量的命名规则中，以下哪一项是错误的？</p><p>(c)</p><p>a) 变量名可以由字母、数字和下划线组成</p><p>b) 变量名不能以数字开头</p><p>c) 变量名可以以特殊字符，如@或#，开头</p><p>d) 变量名可以包含大写和小写字母</p></li><li><p>在 Python 中，如何使用 print 函数打印字符串 &quot;<code>Hello, World!</code>&quot;？</p><p>(b)</p><p>a) <code>print &quot;Hello, World!&quot;</code></p><p>b) <code>print(&quot;Hello, World!&quot;)</code></p><p>c) <code>echo(&quot;Hello, World!&quot;)</code></p><p>d) <code>print[Hello, World!]</code></p></li><li><p>print 函数中的 end 参数用于什么？</p><p>(b)</p><p>a) 确定是否结束程序</p><p>b) 在输出的末尾添加指定字符</p><p>c) 控制输出的数量</p><p>d) 确定输出的顺序</p></li><li><p>如果我想在 print 函数中，用&quot;<code>,</code>&quot;作为分隔符，应该如何操作？</p><p>(a)</p><p>a) 使用参数 <code>sep = &quot;,&quot;</code></p><p>b) 使用参数 <code>end = &quot;,&quot;</code></p><p>c) 使用参数 <code>print = &quot;,&quot;</code></p><p>d) 使用参数 <code>divide = &quot;,&quot;</code></p></li><li><p>如果我想在不换行的情况下输出两个变量 a 和 b，以下哪个是正确的？</p><p>(a) ✅</p><p>a) <code>print(a, b, end = &#39; &#39;)</code></p><p>b) <code>print(a, b, sep = &#39; &#39;)</code></p><p>c) <code>print(a; b)</code></p><p>d) <code>print(a, b, end = &#39;\\n&#39;)</code></p></li><li><p>在 Python 中，以下哪种方法可以用来删除变量？</p><p>(c)</p><p>a) <code>drop(variable)</code></p><p>b) <code>remove(variable)</code></p><p>c) <code>del variable</code></p><p>d) <code>delete variable</code></p></li><li><p>在 Python 中，以下哪个语句是错误的？</p><p>(c)</p><p>a) <code>x, y, z = &quot;Orange&quot;, &quot;Banana&quot;, &quot;Cherry&quot;</code></p><p>b) <code>x = y = z = &quot;Orange&quot;</code></p><p>c) <code>x = &quot;Orange&quot; = y</code></p><p>d) <code>x, y = y, x</code></p></li><li><p>在 Python 中，以下哪个声明不是合法的变量名？</p><p>(c)</p><p>a) <code>_myvar</code></p><p>b) <code>myVar</code></p><p>c) <code>9var</code></p><p>d) <code>varName9</code></p></li><li><p>下列哪个 print 函数的使用方式是正确的？</p><p>(a)</p><p>a) <code>print(a, b, c, sep = &#39; &#39;, end = &#39; &#39;)</code></p><p>b) <code>print(a b c sep = &#39; &#39;, end = &#39; &#39;)</code></p><p>c) <code>print[a, b, c, sep = &#39; &#39;, end = &#39; &#39;]</code></p><p>d) <code>print{a, b, c, sep = &#39; &#39;, end = &#39; &#39;}</code></p></li><li><p>Python 中的哪个函数可以用来获取变量的类型？</p><p>(b)</p><p>a) <code>typeof(variable)</code></p><p>b) <code>type(variable)</code></p><p>c) <code>getType(variable)</code></p><p>d) <code>variable.type()</code></p></li></ol><h2 id="_3-填空题" tabindex="-1"><a class="header-anchor" href="#_3-填空题" aria-hidden="true">#</a> 3. 填空题</h2><ol><li><p>在 Python 中，___print__ 关键字用于打印一个变量的值。</p></li><li><p>Python 中的变量可以是字符串、整数、浮点数或布尔类型。例如，<code>my_str = &quot;Hello World&quot;</code> 使 my_str 成为一个 ___变量__。</p></li><li><p>在 Python 中，我们可以通过 ___print( my_var )_(my_var) 来打印变量 my_var。</p></li><li><p>在 Python 中，我们可以使用 my_var = __10___ 来创建一个值为 10 的变量 my_var。</p></li><li><p>如果我们有两个变量 <code>a = 5</code> 和 <code>b = 10</code>，我们可以使用 print(a, ___b__) 来打印这两个变量的值。</p></li><li><p>在 Python 中，变量名可以包含字母、数字和下划线，但不能以数字开头。例如，1my_var 是一个无效的变量名，但 ___my1_var__ 是有效的。</p></li><li><p>如果我有一个整数变量 <code>my_int = 50</code>，我可以通过在打印语句中添加 __print( “The value of my integer is ”, my_int )___ 来打印 &quot;The value of my integer is 50&quot;。</p></li><li><p>在 Python 中，通过使用 __=___ 关键字，我们可以将一个变量的值分配给另一个变量。例如，如果 <code>a = 10</code> 和 <code>b = a</code>，那么 <code>b</code> 的值也会变为10。</p></li><li><p>在 Python 中，我可以通过编写 my_str = __“Hello, Python!”___ 来创建一个包含字符串 &quot;Hello, Python!&quot; 的变量 my_str。</p></li><li><p>如果我有一个浮点型变量 <code>my_float = 5.67</code>，我可以使用 <code>print(__my_float___ + &quot; is my floating point number&quot;)</code> 来打印 &quot;5.67 is my floating point number&quot;。</p></li></ol><h2 id="_4-编程题" tabindex="-1"><a class="header-anchor" href="#_4-编程题" aria-hidden="true">#</a> 4. 编程题</h2><h3 id="_4-1-定义和输出变量" tabindex="-1"><a class="header-anchor" href="#_4-1-定义和输出变量" aria-hidden="true">#</a> 4.1 定义和输出变量</h3><p>要求：定义一个变量，名字为 greeting，并将它的值设置为 <code>&quot;Hello, World!&quot;</code>。然后使用 print 函数将此变量的值打印出来。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>greeting <span class="token operator">=</span> <span class="token string">&#39;Hello, World!&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span> greeting<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-变量的赋值" tabindex="-1"><a class="header-anchor" href="#_4-2-变量的赋值" aria-hidden="true">#</a> 4.2 变量的赋值</h3><p>要求：定义一个变量，名字为 number，并将它的值设置为 10。然后定义一个新的变量，名字为 copy_number，并将它的值设置为变量 number 的值。使用 print 函数分别打印这两个变量的值。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>number <span class="token operator">=</span> <span class="token number">10</span>
copy_number <span class="token operator">=</span> number 
<span class="token keyword">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>copy_number<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-变量的覆盖" tabindex="-1"><a class="header-anchor" href="#_4-3-变量的覆盖" aria-hidden="true">#</a> 4.3 变量的覆盖</h3><p>要求：定义一个变量，名字为 food，并将它的值设置为 <code>&quot;apple&quot;</code>。然后将变量 food 的值改为 <code>&quot;banana&quot;</code>。使用 print 函数打印变量 food 的值，然后解释为什么打印的结果是 <code>&quot;banana&quot;</code> 而不是 <code>&quot;apple&quot;</code>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>food <span class="token operator">=</span> <span class="token string">&quot;apple&quot;</span>
food <span class="token operator">=</span> <span class="token string">&quot;banana&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>food<span class="token punctuation">)</span>
<span class="token comment">#变量的覆盖</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-使用-sep-和-end-参数" tabindex="-1"><a class="header-anchor" href="#_4-4-使用-sep-和-end-参数" aria-hidden="true">#</a> 4.4 使用 sep 和 end 参数</h3><p>要求：定义三个变量 a、 b、c，分别赋值为 1，2，3。使用 print 函数打印这三个变量，使得输出的结果是 <code>1-2-3</code>，并且在输出之后不换行。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">,</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> sep <span class="token operator">=</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-同时输出多个变量" tabindex="-1"><a class="header-anchor" href="#_4-5-同时输出多个变量" aria-hidden="true">#</a> 4.5 同时输出多个变量</h3><p>要求：定义四个变量 name、age、job、hobby，并分别赋值为你的名字、年龄、职业和爱好。使用一次 print 函数将这四个变量的值同时打印出来，每个值之间用逗号隔开。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&#39;Cindy&#39;</span>
age <span class="token operator">=</span> <span class="token number">17</span>
career <span class="token operator">=</span> <span class="token string">&#39;Student&#39;</span>
hobby <span class="token operator">=</span> <span class="token string">&quot;Dancing&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> career<span class="token punctuation">,</span> hobby<span class="token punctuation">,</span> sep <span class="token operator">=</span> <span class="token string">&#39;, &#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-多个变量赋予不同值和相同值" tabindex="-1"><a class="header-anchor" href="#_4-6-多个变量赋予不同值和相同值" aria-hidden="true">#</a> 4.6 多个变量赋予不同值和相同值</h3><p>要求：定义三个变量 x、y、z，并且同时为它们赋予值 10。然后将 x 的值改为 20，y 的值改为30。使用 print 函数分别打印 x、y、z 的值。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> y <span class="token operator">=</span> z <span class="token operator">=</span> <span class="token number">10</span>
x <span class="token operator">=</span> <span class="token number">20</span>
y <span class="token operator">=</span> <span class="token number">30</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),t=[o];function i(c,l){return a(),s("div",null,t)}const u=n(p,[["render",i],["__file","01-practice.html.vue"]]);export{u as default};