import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as p}from"./app-iXnhtsKv.js";const t="/assets/image-20240111080948023-Qr_qJ2Z3.png",e={},o=p(`<h2 id="_1-for循环" tabindex="-1"><a class="header-anchor" href="#_1-for循环" aria-hidden="true">#</a> 1. for循环</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>student_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;小红&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;小兰&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;小花&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> student <span class="token keyword">in</span> student_list<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> number <span class="token keyword">in</span> lst<span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token punctuation">{</span>number<span class="token operator">*</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
new_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> number <span class="token keyword">in</span> lst<span class="token punctuation">:</span>
    new_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>number<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_lst<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-range" tabindex="-1"><a class="header-anchor" href="#_2-range" aria-hidden="true">#</a> 2. range</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>是一个左闭右开的范围，所以会print 0-9 不会print10</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>print一个从0到100的列表</p><h3 id="_2-1-range的使用" tabindex="-1"><a class="header-anchor" href="#_2-1-range的使用" aria-hidden="true">#</a> 2.1 range的使用</h3><figure><img src="`+t+'" alt="image-20240111080948023" tabindex="0" loading="lazy"><figcaption>image-20240111080948023</figcaption></figure><p>​ 开始 结束 间隔</p>',12),c=[o];function i(l,u){return s(),a("div",null,c)}const k=n(e,[["render",i],["__file","12-for-loop.html.vue"]]);export{k as default};