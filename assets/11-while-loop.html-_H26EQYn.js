import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-bkgWcqg0.js";const o={},t=e(`<h2 id="_1-while-循环" tabindex="-1"><a class="header-anchor" href="#_1-while-循环" aria-hidden="true">#</a> 1. while 循环</h2><p>当满足条件是一直执行里面的代码块</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>user_answer_correct <span class="token operator">=</span> <span class="token boolean">False</span>
<span class="token keyword">while</span> <span class="token keyword">not</span> user_answer_correct<span class="token punctuation">:</span>
    user_gender <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Please input your gender(F/M): &quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> user_gender <span class="token operator">==</span> <span class="token string">&#39;F&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Your are a girl&quot;</span><span class="token punctuation">)</span>
        user_answer_correct <span class="token operator">=</span> <span class="token boolean">True</span>
    <span class="token keyword">elif</span> user_gender <span class="token operator">==</span> <span class="token string">&#39;M&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Your are a boy&quot;</span><span class="token punctuation">)</span>
        user_answer_correct <span class="token operator">=</span> <span class="token boolean">True</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Wrong inout, please input F or M&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[t];function r(l,c){return s(),a("div",null,p)}const d=n(o,[["render",r],["__file","11-while-loop.html.vue"]]);export{d as default};
