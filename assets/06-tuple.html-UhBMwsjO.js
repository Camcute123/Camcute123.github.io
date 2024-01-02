import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as p}from"./app-oLtpNAfK.js";const t="/assets/image-20240102084728982-8UhzCcHD.png",e={},o=p(`<h2 id="_1-创建元组" tabindex="-1"><a class="header-anchor" href="#_1-创建元组" aria-hidden="true">#</a> 1.创建元组</h2><ul><li>使用小括号创建</li><li>里面的元素用英文逗号隔开</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;毒药&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;解药&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;感冒药&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tup<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token punctuation">(</span><span class="token string">&#39;毒药&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;解药&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;感冒药&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;tuple&#39;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-列表和元组的对比" tabindex="-1"><a class="header-anchor" href="#_2-列表和元组的对比" aria-hidden="true">#</a> 2. 列表和元组的对比</h2><figure><img src="`+t+`" alt="image-20240102084728982" tabindex="0" loading="lazy"><figcaption>image-20240102084728982</figcaption></figure><ul><li>列表中：元素用方括号包裹[]；在元组中，元素用圆括号包裹 ()</li><li>列表中的元素可以被修改，添加，删除，即列表是可变的数据类型，元组是不可变的数据类型。</li></ul><h2 id="_3-元素是不可变的" tabindex="-1"><a class="header-anchor" href="#_3-元素是不可变的" aria-hidden="true">#</a> 3. 元素是不可变的</h2><p>但凡想要修改元组，是会报错：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;毒药&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;解药&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;感冒药&#39;</span><span class="token punctuation">)</span>
tup<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;苹果&#39;</span>

<span class="token comment">#output</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;/Users/wangruoyihan/PycharmProjects/pythonProject/python homework.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">101</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    tup<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;苹果&#39;</span>
    <span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span>
TypeError<span class="token punctuation">:</span> <span class="token string">&#39;tuple&#39;</span> <span class="token builtin">object</span> does <span class="token keyword">not</span> support item assignment

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-元组的取值和分片操作" tabindex="-1"><a class="header-anchor" href="#_4-元组的取值和分片操作" aria-hidden="true">#</a> 4. 元组的取值和分片操作</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;lilei&#39;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tup<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tup<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tup<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">## print(tup[-2:-4:-1])</span>
<span class="token comment">#(&#39;lilei&#39;, 2)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-元组的特点" tabindex="-1"><a class="header-anchor" href="#_5-元组的特点" aria-hidden="true">#</a> 5. 元组的特点</h2><p>思考一下：如果元组只有一个元素，是什么类型？</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;int&#39;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码运行后，我们可知：如果元组只有一个元素，那么元素本身的类型。</p><p>为什么会是这个结果呢？</p><ul><li>我们常规在数学计算中括号是在运算的时候用来保证优先级和在适当的情况下，可以直接去掉。</li><li><code>(1 + 2) * (2 + 1) = (3) * (3) = 3 * 3 = 9</code> 所以，你可以发现 <code>(3) * (3) = 3 * 3</code> 左边的 <code>(3)</code> 不就是上面所说的“元组只有一个元素的情况”。也就类似于数学表达式中括号可以直接省去。</li></ul><p>如何解决呢？</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;tuple&#39;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-元组的拼接" tabindex="-1"><a class="header-anchor" href="#_6-元组的拼接" aria-hidden="true">#</a> 6. 元组的拼接</h2><p>直接用加法拼接</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
tup2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
new_tup <span class="token operator">=</span> tup1 <span class="token operator">+</span>tup2
<span class="token keyword">print</span><span class="token punctuation">(</span>new_tup<span class="token punctuation">)</span>

<span class="token comment">#output</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-小试牛🔪" tabindex="-1"><a class="header-anchor" href="#_7-小试牛🔪" aria-hidden="true">#</a> 7. 小试牛🔪</h2><p>对下列元素排序：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>思路：</p><ul><li>因为元组不可变，所以先把元组转换成列表；</li><li>然后进行排序</li><li>接着进行转换回元组；</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
new_list <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span>
new_list<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>
new_tup <span class="token operator">=</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span>new_list<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_tup<span class="token punctuation">)</span>

<span class="token comment">#output</span>
<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-使用sorted" tabindex="-1"><a class="header-anchor" href="#_7-2-使用sorted" aria-hidden="true">#</a> 7.2 使用sorted()</h3><p>实际上sorted实现的也就是上面的流程</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
lst <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
tup <span class="token operator">=</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span>

<span class="token comment">#---output---</span>
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-zip" tabindex="-1"><a class="header-anchor" href="#_8-zip" aria-hidden="true">#</a> 8. Zip()</h2><p><code>zip()</code> 是一个内置函数，用于将多个可迭代对象（如列表、元组或字符串）的相应元素配对并返回一个元组的迭代器。如果你有两个或更多的列表，并且想要根据它们的相应元素创建一个新的迭代器，那么 <code>zip()</code> 函数就非常有用。</p><ol><li>假设有两个列表</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>lst1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
lst2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用<code>zip()</code>来配对这些列表的元素：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>zipped <span class="token operator">=</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>lst1<span class="token punctuation">,</span> lst2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>zipped</code>现在是一个包含元组的迭代器，每个元组都是由两个列表的相应元素组成。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
zipped <span class="token operator">=</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> list2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>zipped<span class="token punctuation">)</span>  <span class="token comment"># 是一个 zip 对象、迭代器地址</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>zipped<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 转换成列表查看，也可以转换成元组</span>
<span class="token comment"># print(*zipped)  # * 号用来解包</span>
<span class="token comment"># 当然也可以用循环，但是目前不涉及。</span>
<span class="token comment"># 上面的代码中，你用了列表，后面就用不了 *，因为数据已经被提取走了。</span>

<span class="token comment"># ---output---</span>
<span class="token operator">&lt;</span><span class="token builtin">zip</span> <span class="token builtin">object</span> at <span class="token number">0x10343e280</span><span class="token operator">&gt;</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用循环来遍历这个迭代器：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> num<span class="token punctuation">,</span> letter <span class="token keyword">in</span> zipped<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Number:</span><span class="token interpolation"><span class="token punctuation">{</span>num<span class="token punctuation">}</span></span><span class="token string">, Letter: </span><span class="token interpolation"><span class="token punctuation">{</span>letter<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

<span class="token comment">#---output---:</span>
Number<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span> Letter<span class="token punctuation">:</span> a
Number<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span> Letter<span class="token punctuation">:</span> b
Number<span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span> Letter<span class="token punctuation">:</span> c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>元组同理：</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
tup2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>
zipped <span class="token operator">=</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>tup1<span class="token punctuation">,</span> tup2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>zipped<span class="token punctuation">)</span>  <span class="token comment"># 是一个迭代器地址</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>zipped<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 转换成列表查看，也可以转换成元组</span>
<span class="token comment"># print(*zipped)  # * 号用来解包</span>

<span class="token comment"># ---output---</span>
<span class="token operator">&lt;</span><span class="token builtin">zip</span> <span class="token builtin">object</span> at <span class="token number">0x104f0d400</span><span class="token operator">&gt;</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),c=[o];function l(u,i){return s(),a("div",null,c)}const d=n(e,[["render",l],["__file","06-tuple.html.vue"]]);export{d as default};
