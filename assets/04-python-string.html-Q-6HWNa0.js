import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-DSnxh8tb.js";const p="/assets/image-20231214083505664--FCZrLKE.png",e="/assets/image-20231215074000023-uDPObaGQ.png",o="/assets/image-20231215074315872-cnGeUbVN.png",i="/assets/image-20231215083113492-mrqZd7r1.png",l="/assets/image-20231215083057643-UueSs9hO.png",c="/assets/image-20231225075451181-hAHDYE0g.png",u={},r=t('<h2 id="_1-字符串的定义" tabindex="-1"><a class="header-anchor" href="#_1-字符串的定义" aria-hidden="true">#</a> 1.字符串的定义</h2><p>字符串是由字母，数字和特殊字符组成的特殊序列</p><figure><img src="'+p+`" alt="image-20231214083505664" tabindex="0" loading="lazy"><figcaption>image-20231214083505664</figcaption></figure><h2 id="_2-创建字符串" tabindex="-1"><a class="header-anchor" href="#_2-创建字符串" aria-hidden="true">#</a> 2.创建字符串</h2><p><strong>如何创建字符串？</strong></p><p>——使用单引号，双引号或者三引号</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> ‘Cindy’
number <span class="token operator">=</span> “<span class="token number">31</span>”
paragraph <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;Hello everyone!
hello Cindy!&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为什么python同时支持三种创建字符串的方法</strong></p><p>双引号和单引号在一起可以避免歧义</p><p>可以双引号中需要引号的部分使用单引号</p><p>三个引号可以分行，不用重复打引号</p><p>但是英文当中可以缩写如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;I&#39;</span>m bornforthis<span class="token punctuation">.</span>&#39;  <span class="token comment"># 在英文当中也可以这样缩写</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>


<span class="token comment"># 输出</span>
  File <span class="token string">&quot;/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/39-YDN/lesson2.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">15</span>
    string <span class="token operator">=</span> <span class="token string">&#39;I&#39;</span>m bornforthis<span class="token punctuation">.</span>&#39;  <span class="token comment"># 在英文当中也可以这样缩写</span>
                <span class="token operator">^</span>
SyntaxError<span class="token punctuation">:</span> invalid syntax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>因为，开头是单引号，所以 Python 会寻找到下一个第一次出现的单引号进行匹配。而第一个单引号不在字符串的末尾，所以导致整个字符串异常。（没有完全包裹字符串全部内容）</strong></p><p>如何解决上面描述的问题呢？——使用双引号。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;I&#39;m bornforthis.&quot;</span>  <span class="token comment"># 外面使用双引号进行包裹即可</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
I&#39;m bornforthis<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>有时候我们需要字符串里面有单引号或双引号，此时发挥作用： <strong><span style="color:orange;">单双引号混用，是第一个原因</span></strong></li></ul><p>那么三引号呢？</p><p>假设我们现在需要存储如下文本：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>放入字符串，我们如何在 Python 代码实现呢？</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> &quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&quot;  <span class="token comment"># 外面使用双引号进行包裹即可</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
  File <span class="token string">&quot;/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/39-YDN/lesson2.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">15</span>
    string <span class="token operator">=</span> &quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
                                                     <span class="token operator">^</span>
SyntaxError<span class="token punctuation">:</span> EOL <span class="token keyword">while</span> scanning string literal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常规的单引号、双引号是不支持多行文本，但是有一个方法可以间接实现看似多行文本，但实际是单行，在每一行的末尾添加 <code>\\</code>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> &quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 \\
\\
浅者见浅，深者见深——黄家宝\\
\\
起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\\
\\
先实现功能，再去优化，否则一切会很乱。——AI悦创\\
\\
凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&quot;  <span class="token comment"># 外面使用双引号进行包裹即可</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 浅者见浅，深者见深——黄家宝起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。——AI悦创凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的输出可知，每行结尾添加 <code>\\</code> 只能实现看起来换行，实际上还是一行。「就是：一行显示不完，换行显示而已，但是本身还是一行」</p><figure><img src="`+e+`" alt="image-20231215074000023" tabindex="0" loading="lazy"><figcaption>image-20231215074000023</figcaption></figure><p>此时，我们使用三引号测试：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&quot;&quot;&quot;</span>  <span class="token comment"># 外面使用双引号进行包裹即可</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>


<span class="token comment"># 输出</span>
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以从上面的输出可知，原本什么格式，输出就是什么格式。「原样输出」「三个单引号的效果和上面一样」</p><ul><li><strong><span style="color:orange;">三个单引号或者三个双引号，实现原样输出。</span></strong></li><li><strong><span style="color:orange;">多行注释</span></strong></li><li><strong><span style="color:orange;">单双三引号混用</span></strong>（代码略）</li></ul><figure><img src="`+o+`" alt="image-20231215074315872" tabindex="0" loading="lazy"><figcaption>image-20231215074315872</figcaption></figure><h2 id="_3-字符串长度" tabindex="-1"><a class="header-anchor" href="#_3-字符串长度" aria-hidden="true">#</a> 3. 字符串长度</h2><p>如何获取字符串长度？ —— <code>len()</code></p><p><code>len():</code>返回字符串中字符长度或字符数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>paragraph <span class="token operator">=</span> <span class="token string">&quot;Hello everyone!&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>paragraph<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用len获取字符串长度时，是从数字1开始的。</p><h2 id="_4-字符串中字符的获取" tabindex="-1"><a class="header-anchor" href="#_4-字符串中字符的获取" aria-hidden="true">#</a> 4. 字符串中字符的获取</h2><h3 id="_4-1-获取单个字符" tabindex="-1"><a class="header-anchor" href="#_4-1-获取单个字符" aria-hidden="true">#</a> 4.1 获取单个字符</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
select_1 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
select_2 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>
select_3 <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">[</span>select_3 <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">#output</span>
b
s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-获取多个连续字符" tabindex="-1"><a class="header-anchor" href="#_4-2-获取多个连续字符" aria-hidden="true">#</a> 4.2 获取多个连续字符</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
语法：string = &quot;bornforthis&quot;
select = string[start:end]
PS: end 要+1
&quot;&quot;&quot;</span>
<span class="token comment">#获取字符串bor</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
select_1 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token number">7</span><span class="token punctuation">]</span>
select_2 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select_1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select_2<span class="token punctuation">)</span>

<span class="token comment">#output</span>
bor
<span class="token keyword">for</span>
this
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-获取多个不连续字符" tabindex="-1"><a class="header-anchor" href="#_4-3-获取多个不连续字符" aria-hidden="true">#</a> 4.3 获取多个不连续字符</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>string = &quot;0123456789&quot;
&quot;&quot;&quot;
语法：string = &quot;0123456789&quot;
select = string[start: end: sep]
PS: end 要+1
&quot;&quot;&quot;
#获取字符串bor
select = string[0: len(string): 2]
print(select)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;0123456789&quot;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
语法：string = &quot;0123456789&quot;
select = string[start: end: sep]
PS: end 要+1
&quot;&quot;&quot;</span>
<span class="token comment">#获取字符串bor</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">]</span>
select_1 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">]</span>
string_1 <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select_2 <span class="token operator">=</span> string_1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>string_1<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">]</span>
select_3 <span class="token operator">=</span> string_1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>string_1<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select_1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select_2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select_3<span class="token punctuation">)</span>

<span class="token comment">#output</span>
<span class="token number">02468</span>
<span class="token number">13579</span>
ofts
bnri
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化方法，从0开始，默认不需要写，到结尾，也可以不写</p><p>所以从开始到结尾，打印步长为2的所有数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>string = &quot;0123456789&quot;
select = string[:: 2]
print(select)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不是从[0]开始，就不可以省略</p><h3 id="_4-4-字符串倒序" tabindex="-1"><a class="header-anchor" href="#_4-4-字符串倒序" aria-hidden="true">#</a> 4.4 字符串倒序</h3><h4 id="_4-4-1-实现" tabindex="-1"><a class="header-anchor" href="#_4-4-1-实现" aria-hidden="true">#</a> 4.4.1 实现</h4><p>字符串的第三个位置，控制的是字符的提取方向。默认正数为1，如果改成-1，则会变成反方向。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>正负控制方向，数字大小控制步长</p></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Vervevividness&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
<span class="token comment">#output</span>
ssendivivevreV
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-2string-1-省略了" tabindex="-1"><a class="header-anchor" href="#_4-4-2string-1-省略了" aria-hidden="true">#</a> 4.4.2<code>string[::1]</code>省略了</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Vervevividness&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span><span class="token comment">#无结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方向相互冲突，所以没有结果</p><figure><img src="`+i+`" alt="image-20231215083113492" tabindex="0" loading="lazy"><figcaption>image-20231215083113492</figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Vervevividness&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
<span class="token comment">#output</span>
ssendivivevre
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>0+1 = 1 仍然取不到[0]的数值</p><p>可以通过省略0来解决这个问题</p><h5 id="_4-4-2-1方法" tabindex="-1"><a class="header-anchor" href="#_4-4-2-1方法" aria-hidden="true">#</a> 4.4.2.1方法</h5><p>重写开始结尾</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Vervevividness&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">15</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
<span class="token comment">#output</span>
ssendivivevreV
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="image-20231215083057643" tabindex="0" loading="lazy"><figcaption>image-20231215083057643</figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
<span class="token comment">#rofn</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
<span class="token comment">#output</span>
rofn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-字符串内置方法" tabindex="-1"><a class="header-anchor" href="#_5-字符串内置方法" aria-hidden="true">#</a> 5. 字符串内置方法</h2><h3 id="_5-1-upper" tabindex="-1"><a class="header-anchor" href="#_5-1-upper" aria-hidden="true">#</a> 5.1 .upper()</h3><p>将字符串内容，全部转成大写</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
upper_string  <span class="token operator">=</span> string<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>upper_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
BORNFORTHIS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-lower" tabindex="-1"><a class="header-anchor" href="#_5-2-lower" aria-hidden="true">#</a> 5.2 .lower()</h3><p>将字符串的内容全部转成小写</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS&quot;</span>
lower_string  <span class="token operator">=</span> string<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lower_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-capitalize" tabindex="-1"><a class="header-anchor" href="#_5-3-capitalize" aria-hidden="true">#</a> 5.3 .capitalize()</h3><p>将字符串首字母转换成大写（只有首字母）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;hello, I am Lisa&quot;</span>
capitalize_string  <span class="token operator">=</span> string<span class="token punctuation">.</span>capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>capitalize_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Hello<span class="token punctuation">,</span> i am lisa

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-title" tabindex="-1"><a class="header-anchor" href="#_5-4-title" aria-hidden="true">#</a> 5.4 .title()</h3><p>将字符串的每个单词的首字母大写（无论什么间隔）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;hello, I-am-lisa&quot;</span>
title_string  <span class="token operator">=</span> string<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>title_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Hello<span class="token punctuation">,</span> I<span class="token operator">-</span>Am<span class="token operator">-</span>Lisa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-startswith" tabindex="-1"><a class="header-anchor" href="#_5-5-startswith" aria-hidden="true">#</a> 5.5 .startswith()</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;hello, I-am-lisa&quot;</span>
new_string  <span class="token operator">=</span> string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;h&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>
new_string1  <span class="token operator">=</span> string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;he&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string1<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>
<span class="token boolean">True</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-endswith" tabindex="-1"><a class="header-anchor" href="#_5-6-endswith" aria-hidden="true">#</a> 5.6 .endswith()</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;hello, I-am-lisa&quot;</span>
new_string  <span class="token operator">=</span> string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;-lisa&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>
new_string_1  <span class="token operator">=</span> string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;s&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string_1<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-7-count" tabindex="-1"><a class="header-anchor" href="#_5-7-count" aria-hidden="true">#</a> 5.7 .count()</h3><p>检测目标（特定）字符出现的次数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string  <span class="token operator">=</span> string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>
string <span class="token operator">=</span> <span class="token string">&quot;I like apple apple apple apple&quot;</span>
new_string  <span class="token operator">=</span> string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token number">2</span>
<span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-8-find" tabindex="-1"><a class="header-anchor" href="#_5-8-find" aria-hidden="true">#</a> 5.8 .find()</h3><p>寻找目标字符或单词在特定字符串中，第一次出现的下标。如果是查找单词，那么<code>find( )</code> 返回目标单词第一个字母的下标。</p><p>如果查询的字符或单词不存在，则返回“-1”</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string  <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string  <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
<span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string  <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;orn&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-9-index" tabindex="-1"><a class="header-anchor" href="#_5-9-index" aria-hidden="true">#</a> 5.9 .index()</h3><p>寻找目标字符或单词在特定字符串，第一次出现的下标。如果是查找单词，那么<code>index（）</code>返回目标单词的第一个字符的下标</p><p>如果查询的单词不存在，则报错</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;orn&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token number">1</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string_1 <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;q&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string_1<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;/Users/wangruoyihan/PycharmProjects/pythonProject/python 11.12.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">95</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    new_string_1 <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;q&quot;</span><span class="token punctuation">)</span>
                   <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span>
ValueError<span class="token punctuation">:</span> substring <span class="token keyword">not</span> found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-10-isdigit" tabindex="-1"><a class="header-anchor" href="#_5-10-isdigit" aria-hidden="true">#</a> 5.10 .isdigit()</h3><p>判断字符串是不是纯数字字符串，字符串中只要有一个字符是非数字，则返回false。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;12345678&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;12345678a&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token comment">#output</span>
false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-11-isalpha" tabindex="-1"><a class="header-anchor" href="#_5-11-isalpha" aria-hidden="true">#</a> 5.11 .isalpha()</h3><p>判断字符串是不是纯字母字符串，字符串中只要有一个字符是非字母字，则返回false。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Verveviviness&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;Verve vividness&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token comment">#output</span>
false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-12-isalnum" tabindex="-1"><a class="header-anchor" href="#_5-12-isalnum" aria-hidden="true">#</a> 5.12 .isalnum()</h3><p>判断字符串是不是纯数字或者纯字母，纯数字字母字符串，字符串中但凡出现非数字字母元素，则返回False</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Verveviviness&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;123456&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;Verveviviness1234&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment">#output</span>
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-13-isupper" tabindex="-1"><a class="header-anchor" href="#_5-13-isupper" aria-hidden="true">#</a> 5.13 .isupper</h3><p>判断字符串是否全部大写，字符串中只要有一个字符是非大写，则返回false。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;HELLO&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;HELLOa&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">False</span>

string <span class="token operator">=</span> <span class="token string">&quot;HELLO$$&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-14-islower" tabindex="-1"><a class="header-anchor" href="#_5-14-islower" aria-hidden="true">#</a> 5.14 .islower</h3><p>判断字符串是否全部小写，字符串中只要有一个字符是非小写，则返回false。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;Helloa&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">False</span>

string <span class="token operator">=</span> <span class="token string">&quot;hello$$&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-15-isspace" tabindex="-1"><a class="header-anchor" href="#_5-15-isspace" aria-hidden="true">#</a> 5.15 .isspace</h3><p>判断字符串是否为纯空格，多少个空格都可以。纯空格返回True，否则返回False</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;     &quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot; &quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;hello$$&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-16-strip" tabindex="-1"><a class="header-anchor" href="#_5-16-strip" aria-hidden="true">#</a> 5.16 .strip()</h3><p>默认去掉目标字符串的前后空白字符，如果指定参数，则去掉指定字符。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;  Vervevividness  &quot;</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本字符串&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉空白后的&quot;</span><span class="token punctuation">,</span> strip_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本字符串   Vervevividness  
去掉空白后的 Vervevividness

string <span class="token operator">=</span> <span class="token string">&quot; --Vervevividness--  &quot;</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&quot;- &quot;</span><span class="token punctuation">)</span><span class="token comment"># 如果只打-，只会去除连续的减号</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本字符串&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉-和空白后的&quot;</span><span class="token punctuation">,</span> strip_string<span class="token punctuation">)</span> <span class="token comment">#没有先后顺序</span>
<span class="token comment">#output</span>
原本字符串  <span class="token operator">-</span><span class="token operator">-</span>Vervevividness<span class="token operator">-</span><span class="token operator">-</span>  
去掉<span class="token operator">-</span>和空白后的 Vervevividness
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-17-lstrip" tabindex="-1"><a class="header-anchor" href="#_5-17-lstrip" aria-hidden="true">#</a> 5.17 .lstrip()</h3><p>默认去掉字符串左边的空白字符，如果指定参数，则去掉左边的指定字符。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;   bornforthis   &quot;</span>
lstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉左边空白字符后:&quot;</span><span class="token punctuation">,</span> lstrip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span>    bornforthis   
去掉左边空白字符后<span class="token punctuation">:</span> bornforthis   


string <span class="token operator">=</span> <span class="token string">&quot;----bornforthis----&quot;</span>
lstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉左边 &#39;-&#39; 后:&quot;</span><span class="token punctuation">,</span> lstrip_string<span class="token punctuation">)</span>


<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉左边 <span class="token string">&#39;-&#39;</span> 后<span class="token punctuation">:</span> bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>

string <span class="token operator">=</span> <span class="token string">&quot;-- --bornforthis----&quot;</span>
lstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token string">&#39;- &#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 不分先后顺序</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉左边 &#39;- &#39; 后:&quot;</span><span class="token punctuation">,</span> lstrip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉左边 <span class="token string">&#39;- &#39;</span> 后<span class="token punctuation">:</span> bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-18-rsrip" tabindex="-1"><a class="header-anchor" href="#_5-18-rsrip" aria-hidden="true">#</a> 5.18 .Rsrip()</h3><p>默认去掉字符串右边的空白字符，如果指定参数，则去掉右边的指定字符。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;   bornforthis   &quot;</span>
rstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉右边空白字符后:&quot;</span><span class="token punctuation">,</span> rstrip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span>    bornforthis   
去掉右边空白字符后<span class="token punctuation">:</span>    bornforthis


string <span class="token operator">=</span> <span class="token string">&quot;----bornforthis----&quot;</span>
rstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉右边 &#39;-&#39; 后:&quot;</span><span class="token punctuation">,</span> rstrip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉右边 <span class="token string">&#39;-&#39;</span> 后<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis


string <span class="token operator">=</span> <span class="token string">&quot;----bornforthis-- --&quot;</span>
rstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token string">&#39;- &#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 不分先后顺序</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉右边 &#39;- &#39; 后:&quot;</span><span class="token punctuation">,</span> rstrip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>
去掉右边 <span class="token string">&#39;- &#39;</span> 后<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-19-replce" tabindex="-1"><a class="header-anchor" href="#_5-19-replce" aria-hidden="true">#</a> 5.19 .replce()</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;  Vervevividness  &quot;</span>
replace_string <span class="token operator">=</span> string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的： &quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;改后的： &quot;</span><span class="token punctuation">,</span> replace_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的：    Vervevividness  
改后的：  @ Vervevividness  

string <span class="token operator">=</span> <span class="token string">&quot;  Vervevividness  &quot;</span>
replace_string <span class="token operator">=</span> string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的： &quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;改后的： &quot;</span><span class="token punctuation">,</span> replace_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的：    Vervevividness  
改后的：  @@Vervevividness@@

string <span class="token operator">=</span> <span class="token string">&quot;  11--Vervevividness--11  &quot;</span>
replace_string <span class="token operator">=</span> string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;1-&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ai-&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的： &quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;改后的： &quot;</span><span class="token punctuation">,</span> replace_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的：    <span class="token number">11</span><span class="token operator">-</span><span class="token operator">-</span>Vervevividness<span class="token operator">-</span><span class="token operator">-</span><span class="token number">11</span>  
改后的：    1ai<span class="token operator">-</span><span class="token operator">-</span>Vervevividness<span class="token operator">-</span><span class="token operator">-</span><span class="token number">11</span>  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-20-split" tabindex="-1"><a class="header-anchor" href="#_5-20-split" aria-hidden="true">#</a> 5.20 .split()</h3><p><code>.split(sep, maxsplit)</code>以特定字符进行分割，默认空格分割。如果传入参数「sep」，则以参数进行分割。返回分割后的列表。maxsplit用于控制分割几次。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;hello bornforthis ok&quot;</span>
string_split <span class="token operator">=</span> string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串: &quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后的: &quot;</span><span class="token punctuation">,</span> string_split<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;hello-bornforthis-ok&quot;</span>
string_split <span class="token operator">=</span> string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串: &quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后的: &quot;</span><span class="token punctuation">,</span> string_split<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;hello-bornforthis-ok&quot;</span>
string_split <span class="token operator">=</span> string<span class="token punctuation">.</span>split<span class="token punctuation">(</span>sep<span class="token operator">=</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span> maxsplit<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串: &quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后的: &quot;</span><span class="token punctuation">,</span> string_split<span class="token punctuation">)</span>

<span class="token comment">#output</span>
原本的字符串<span class="token punctuation">:</span>  hello bornforthis ok
分割后的<span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">]</span>
原本的字符串<span class="token punctuation">:</span>  hello<span class="token operator">-</span>bornforthis<span class="token operator">-</span>ok
分割后的<span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">]</span>
原本的字符串<span class="token punctuation">:</span>  hello<span class="token operator">-</span>bornforthis<span class="token operator">-</span>ok
分割后的<span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis-ok&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-21-rsplit" tabindex="-1"><a class="header-anchor" href="#_5-21-rsplit" aria-hidden="true">#</a> 5.21 rsplit</h3><p><code>.rsplit(sep, maxsplit)</code> 从字符串右边进行分割，也可以传入参数「sep」，进行指定分割。返回分割后的列表。maxsplit 指定分割次数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;hello bornforthis ok&quot;</span>
string_split <span class="token operator">=</span> string<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串: &quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后的: &quot;</span><span class="token punctuation">,</span> string_split<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;hello-bornforthis-ok&quot;</span>
string_split <span class="token operator">=</span> string<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串: &quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后的: &quot;</span><span class="token punctuation">,</span> string_split<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;hello-bornforthis-ok&quot;</span>
string_split <span class="token operator">=</span> string<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串: &quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后的: &quot;</span><span class="token punctuation">,</span> string_split<span class="token punctuation">)</span>

<span class="token comment">#output</span>
原本的字符串<span class="token punctuation">:</span>  hello bornforthis ok
分割后的<span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">]</span>
原本的字符串<span class="token punctuation">:</span>  hello<span class="token operator">-</span>bornforthis<span class="token operator">-</span>ok
分割后的<span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">]</span>
原本的字符串<span class="token punctuation">:</span>  hello<span class="token operator">-</span>bornforthis<span class="token operator">-</span>ok
分割后的<span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;hello-bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-22-join" tabindex="-1"><a class="header-anchor" href="#_5-22-join" aria-hidden="true">#</a> 5.22 join()</h3><p>以特定字符使字符串间隔。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Vervevividness&quot;</span>
join_string <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span> <span class="token punctuation">,</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;添加之后的:&quot;</span><span class="token punctuation">,</span> join_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的字符串<span class="token punctuation">:</span> Vervevividness
添加之后的<span class="token punctuation">:</span> V<span class="token operator">-</span>e<span class="token operator">-</span>r<span class="token operator">-</span>v<span class="token operator">-</span>e<span class="token operator">-</span>v<span class="token operator">-</span>i<span class="token operator">-</span>v<span class="token operator">-</span>i<span class="token operator">-</span>d<span class="token operator">-</span>n<span class="token operator">-</span>e<span class="token operator">-</span>s<span class="token operator">-</span>s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-字符串格式化" tabindex="-1"><a class="header-anchor" href="#_6-字符串格式化" aria-hidden="true">#</a> 6. 字符串格式化</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;Hi bornforthis, welcome to here&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>所存在的问题：需要换一个人名或者地区，就需要重新创建一个全新的字符串。</li><li>我们更希望有类似模版，让我们不同的人名、地面填写进去。而不是每个人都从头创建一个新字符串。</li></ul><p>当然，这个时候有可能会想到使用字符串的加法，但字符串加法存在问题。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>str1 <span class="token operator">=</span> <span class="token string">&quot;Hi &quot;</span>
str2 <span class="token operator">=</span> <span class="token string">&quot;welcome to here&quot;</span>
n <span class="token operator">=</span> str1 <span class="token operator">+</span> <span class="token string">&quot;Cindy, &quot;</span> <span class="token operator">+</span> str2
<span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token comment">#output</span>

Hi Cindy<span class="token punctuation">,</span> welcome to here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由上面的代码可知，虽然实现了。但是很繁琐，如果更复杂的字符就不合适了。</p><p>另一个问题是，在python中不同的数据类型不能直接相加，除非强制转化为字符串：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Money is: &quot;</span> <span class="token operator">+</span> <span class="token number">190</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;/Users/wangruoyihan/PycharmProjects/pythonProject/python 11.12.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">98</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    string <span class="token operator">=</span> <span class="token string">&quot;Money is: &quot;</span> <span class="token operator">+</span> <span class="token number">190</span>
             <span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">^</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span>
TypeError<span class="token punctuation">:</span> can only concatenate <span class="token builtin">str</span> <span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token string">&quot;int&quot;</span><span class="token punctuation">)</span> to <span class="token builtin">str</span>

string <span class="token operator">=</span> <span class="token string">&quot;Money is: &quot;</span> <span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">190</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>—format就应运而生了</p><h3 id="_6-1-format" tabindex="-1"><a class="header-anchor" href="#_6-1-format" aria-hidden="true">#</a> 6.1 format()</h3><ol><li>单个花括号</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hello {}, Welcome to Vervevividness.&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;Sam&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

template_string <span class="token operator">=</span> <span class="token string">&quot;Hi {}, Welcome to Vervevividness&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;Cindy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

new_string <span class="token operator">=</span> template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;guys&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
Hello Sam<span class="token punctuation">,</span> Welcome to Vervevividness<span class="token punctuation">.</span>
Hi Cindy<span class="token punctuation">,</span> Welcome to Vervevividness
Hi guys<span class="token punctuation">,</span> Welcome to Vervevividness
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>多个花括号，按照顺序填充</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hello {}, Welcome to {}.&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;Sam&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Vervevividness&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

template_string <span class="token operator">=</span> <span class="token string">&quot;Hi {}, Welcome to {}&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;Cindy&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Shanghai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

new_string <span class="token operator">=</span> template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;guys&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;here&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
Hello Sam<span class="token punctuation">,</span> Welcome to Vervevividness<span class="token punctuation">.</span>
Hi Cindy<span class="token punctuation">,</span> Welcome to Shanghai
Hi guys<span class="token punctuation">,</span> Welcome to here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>多个花括号指定位置</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hello {1}, Welcome to {0}.&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;Vervevividness&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sam&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

template_string <span class="token operator">=</span> <span class="token string">&quot;Hi {1}, Welcome to {0}&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;Shanghai&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cindy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

new_string <span class="token operator">=</span> template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;here&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;guys&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
Hello Sam<span class="token punctuation">,</span> Welcome to Vervevividness<span class="token punctuation">.</span>
Hi Cindy<span class="token punctuation">,</span> Welcome to Shanghai
Hi guys<span class="token punctuation">,</span> Welcome to here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>参数指定</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hello {name}, Welcome to {region}.&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Sam&quot;</span><span class="token punctuation">,</span> region <span class="token operator">=</span> <span class="token string">&quot;Vervevividness&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

template_string <span class="token operator">=</span> <span class="token string">&quot;Hi {name}, Welcome to {region}&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Cindy&quot;</span><span class="token punctuation">,</span> region <span class="token operator">=</span> <span class="token string">&quot;Shanghai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

new_string <span class="token operator">=</span> template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;guys&quot;</span><span class="token punctuation">,</span> region <span class="token operator">=</span> <span class="token string">&quot;here&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
Hello Sam<span class="token punctuation">,</span> Welcome to Vervevividness<span class="token punctuation">.</span>
Hi Cindy<span class="token punctuation">,</span> Welcome to Shanghai
Hi guys<span class="token punctuation">,</span> Welcome to here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>保留指定小数位</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Money is {:.3f}.&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">190</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
Money <span class="token keyword">is</span> <span class="token number">190.000</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-f" tabindex="-1"><a class="header-anchor" href="#_6-2-f" aria-hidden="true">#</a> 6.2 f</h3><ol><li>直接读取变量</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&quot;Cindy&quot;</span>
region <span class="token operator">=</span> <span class="token string">&quot;Vervevividness&quot;</span>
string <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;Hi </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">, welcome to </span><span class="token interpolation"><span class="token punctuation">{</span>region<span class="token punctuation">}</span></span><span class="token string">.&quot;</span></span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
Hi Cindy<span class="token punctuation">,</span> welcome to Vervevividness<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>保留小数位</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>money <span class="token operator">=</span> <span class="token number">200</span>
string <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;Money is </span><span class="token interpolation"><span class="token punctuation">{</span>money<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">.&quot;</span></span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
Money <span class="token keyword">is</span> <span class="token number">200.000</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-格式化" tabindex="-1"><a class="header-anchor" href="#_6-3-格式化" aria-hidden="true">#</a> %6.3 格式化</h3><ul><li><code>%d</code>:整数</li><li><code>%s:</code>字符串</li><li><code>%f:</code>浮点数</li></ul><ol><li>单个位置传入</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Money is %d&quot;</span>
new_s <span class="token operator">=</span> string <span class="token operator">%</span> <span class="token number">13</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string <span class="token operator">%</span> <span class="token number">19</span><span class="token punctuation">)</span>
string <span class="token operator">=</span> <span class="token string">&quot;Money is %d&quot;</span> <span class="token operator">%</span><span class="token number">19</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
Money <span class="token keyword">is</span> <span class="token number">13</span>
Money <span class="token keyword">is</span> <span class="token number">19</span>
Money <span class="token keyword">is</span> <span class="token number">19</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>多个位置传入</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Money is %d %s&quot;</span>
new_s <span class="token operator">=</span> string <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token string">&quot;HI&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
string <span class="token operator">=</span> <span class="token string">&quot;Money is %d %s&quot;</span> <span class="token operator">%</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token string">&quot;haha&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
Money <span class="token keyword">is</span> <span class="token number">13</span> hello
Money <span class="token keyword">is</span> <span class="token number">19</span> HI
Money <span class="token keyword">is</span> <span class="token number">19</span> haha
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Money is %d %s&quot;</span>
new_s <span class="token operator">=</span> string <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token string">&#39;make a million&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">888</span><span class="token punctuation">,</span> <span class="token string">&#39;sudden wealth&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
string <span class="token operator">=</span> <span class="token string">&quot;Money is %d %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">190</span><span class="token punctuation">,</span> <span class="token string">&#39;super rich&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Money <span class="token keyword">is</span> <span class="token number">13</span> make a million
Money <span class="token keyword">is</span> <span class="token number">888</span> sudden wealth
Money <span class="token keyword">is</span> <span class="token number">190</span> <span class="token builtin">super</span> rich
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>保留小数位</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Money is %.3f&quot;</span>
new_s <span class="token operator">=</span> string <span class="token operator">%</span> <span class="token number">19</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string <span class="token operator">%</span> <span class="token number">18</span><span class="token punctuation">)</span>
string <span class="token operator">=</span> <span class="token string">&quot;Money is %.3f&quot;</span> <span class="token operator">%</span> <span class="token number">180</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>


<span class="token comment"># ---output---</span>
Money <span class="token keyword">is</span> <span class="token number">19.000</span>
Money <span class="token keyword">is</span> <span class="token number">18.000</span>
Money <span class="token keyword">is</span> <span class="token number">180.000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-f-和-format的优缺点" tabindex="-1"><a class="header-anchor" href="#_6-4-f-和-format的优缺点" aria-hidden="true">#</a> 6.4 f 和 format的优缺点</h3><p>format 和 % 都像模版，提前做好模版后面有需要试可以直接使用；</p><p>而 f 就像在银行当中，柜员边问你边登记，不能提前做好模版。</p><h2 id="_7-字符串的不可变性" tabindex="-1"><a class="header-anchor" href="#_7-字符串的不可变性" aria-hidden="true">#</a> 7. 字符串的不可变性</h2><p>字符串是不可变的，不可以改变字符串中的任何元素，如需改变字符串中的元素，则需要新建一个字符串。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;Verevevividness&quot;</span>
s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;c&quot;</span>
<span class="token comment">#output</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;/Users/wangruoyihan/PycharmProjects/pythonProject/python 11.12.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">98</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;c&quot;</span>
    <span class="token operator">~</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span>
TypeError<span class="token punctuation">:</span> <span class="token string">&#39;str&#39;</span> <span class="token builtin">object</span> does <span class="token keyword">not</span> support item assignment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了使用replace还可以使用字符串拼接：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;vervevividness&quot;</span>
new <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token operator">+</span> s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new<span class="token punctuation">)</span>

<span class="token comment">#output</span>
aervevividness
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-字符串转义" tabindex="-1"><a class="header-anchor" href="#_8-字符串转义" aria-hidden="true">#</a> 8. 字符串转义</h2><table><thead><tr><th>转义字符</th><th>含义</th><th>例子</th></tr></thead><tbody><tr><td><code>\\\\</code></td><td>反斜杠符号，为了在字符串中得到 <code>\\</code></td><td><code>s = &quot;bor\\\\nforthis&quot;</code></td></tr><tr><td><code>\\b</code></td><td>退格，类似删除键</td><td><code>s = &quot;bornff\\borthis&quot;</code></td></tr><tr><td><code>\\n</code></td><td>换行</td><td><code>s = &quot;bornfor\\nthis&quot;</code></td></tr><tr><td><code>\\t</code></td><td>制表符</td><td><code>s = &quot;born\\tfor\\tthis&quot;</code></td></tr><tr><td><code>r</code></td><td>取消转义「R和r」都可以</td><td><code>s = r&quot;born\\nforthis</code></td></tr></tbody></table><p>示例代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;Vervevividness&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

s<span class="token operator">=</span> <span class="token string">&quot;Verve\\nvividness&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

s<span class="token operator">=</span> <span class="token string">r&quot;Verve\\nvividness&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

s <span class="token operator">=</span> <span class="token string">&quot;Verve\\bvividness&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

s <span class="token operator">=</span> <span class="token string">&quot;Verve\\\\nvividness&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

s <span class="token operator">=</span> <span class="token string">&quot;a\\tb\\tc\\td&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment">#output</span>
Vervevividness
Verve
vividness
Verve\\nvividness
Vervvividness
Verve\\nvividness
a	b	c	d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-字符串的连接" tabindex="-1"><a class="header-anchor" href="#_9-字符串的连接" aria-hidden="true">#</a> 9. 字符串的连接</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token string">&quot;Verve&quot;</span>
s2 <span class="token operator">=</span> <span class="token string">&quot;vividness&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1 <span class="token operator">+</span>s2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>

<span class="token comment">#output</span>
Vervevividness
Verve vividness

s1 <span class="token operator">=</span> <span class="token string">&#39;*-love-&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1 <span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在末尾输出一个*</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token string">&#39;*-love-&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1 <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> s1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1 <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-读取用户输入" tabindex="-1"><a class="header-anchor" href="#_10-读取用户输入" aria-hidden="true">#</a> 10. 读取用户输入</h2><h3 id="_10-1-input-基本使用" tabindex="-1"><a class="header-anchor" href="#_10-1-input-基本使用" aria-hidden="true">#</a> 10.1 input()基本使用</h3><p>使用<code>input()</code>获取用户输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user_input = input()
print(user_input)

# ---output---
bornforthis
bornforthis

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>input() 使用输入提示</p><p>但是上面的代码，有点小问题：在运行的时候并不能很直观的知道，程序需要我们输入，何况非程序员用户呢？</p><figure><img src="`+c+`" alt="image-20231225075451181" tabindex="0" loading="lazy"><figcaption>image-20231225075451181</figcaption></figure><p>如何解决？——使用输入提示。</p><p><code>input()</code> 函数里面支持我们写入字符串进行提示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>user_input <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;Enter your name:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;user input name:&quot;</span><span class="token punctuation">,</span> user_input<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Enter your name<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>bornforthis
user <span class="token builtin">input</span> name<span class="token punctuation">:</span> bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>user_input <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;please input your information: &quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>user_input<span class="token punctuation">)</span>
<span class="token comment">#output</span>
please <span class="token builtin">input</span> your indormation<span class="token punctuation">:</span> hello
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">str</span>

In <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token string">&quot;hello&quot;</span>   
Out<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">str</span>

In <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span> <span class="token string">&#39;a&#39;</span> <span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span> <span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span>
Out<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">str</span>

In <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token boolean">True</span>
Out<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">str</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的代码示例，我们可以知道：通过 <code>input()</code> 获取用户输入，得到的数据类型都是<strong>字符串</strong>。</p><p>得知 <code>input()</code> 的特点后，如何解决这个问题呢？——用户如何实现：直接输入原有的类型并得到原有的类型。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">12</span>

In <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> typr<span class="token punctuation">(</span>n<span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">int</span>

In <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token comment">#存在一些问题</span>

In <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

In <span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>适合：数字「整数，浮点数」，字符串，布尔形</li><li>不适合：列表，元组，字典，集合</li></ul><h3 id="_10-3-3" tabindex="-1"><a class="header-anchor" href="#_10-3-3" aria-hidden="true">#</a> 10.3.3</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">12</span>

In <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span>s
Out<span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

In <span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span>s
Out<span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">19</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>

In <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span>
Out<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span>

In <span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span>s
Out<span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">set</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">23</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span> <span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">}</span>

In <span class="token punctuation">[</span><span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span>s
Out<span class="token punctuation">[</span><span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>eval()</code>伴随的问题</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>string
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
NameError                                 Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>
Cell In<span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">,</span> line <span class="token number">1</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token number">1</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

File <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">:</span><span class="token number">1</span>

NameError<span class="token punctuation">:</span> name <span class="token string">&#39;string&#39;</span> <span class="token keyword">is</span> <span class="token keyword">not</span> defined

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>稍微分析一下 <code>eval()</code> 的功能“大概”实现原因：</p><ul><li>input 获取用户输入，得到字符串类型。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">44</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

In <span class="token punctuation">[</span><span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s
Out<span class="token punctuation">[</span><span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;[1, 2, 3]&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的代码可以得知，eval 大概率实现的是去掉字符串左右两边的引号。「这个地方 eval 或许不是按我说的实现，但是为了让你们更好理解原理，先这样来。」</p><p>所以，为什么会导致上面的报错呢？</p><ol><li>获取用户输入：<code>s = eval(input(&quot;:&gt;&gt;&gt;&quot;))</code></li><li>其中input会得到<code>‘string’</code>,而通过<code>eval</code>转换之后，就类似于<code>string</code>变量。但是在之前的代码中，并没有创建string这个变量。</li><li>解决方法： <ol><li>在获取用户输入之前提前创建一个叫做string的变量；「但不是我们想要的」</li><li>输入时，有意加上单引号或双引号</li></ol></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">:</span> string <span class="token operator">=</span> <span class="token string">&#39;hello this string&#39;</span>

In <span class="token punctuation">[</span><span class="token number">51</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>string

In <span class="token punctuation">[</span><span class="token number">52</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s
Out<span class="token punctuation">[</span><span class="token number">52</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;hello this string&#39;</span>

In <span class="token punctuation">[</span><span class="token number">53</span><span class="token punctuation">]</span><span class="token punctuation">:</span> num <span class="token operator">=</span> <span class="token number">12</span>

In <span class="token punctuation">[</span><span class="token number">54</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>num

In <span class="token punctuation">[</span><span class="token number">55</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> s
Out<span class="token punctuation">[</span><span class="token number">55</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">56</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token string">&#39;string&#39;</span>

In <span class="token punctuation">[</span><span class="token number">57</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> s
Out<span class="token punctuation">[</span><span class="token number">57</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>eval()</code>小技巧</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span>
Out<span class="token punctuation">[</span><span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span>

In <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
Out<span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span>

In <span class="token punctuation">[</span><span class="token number">29</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">9</span> <span class="token operator">*</span> <span class="token number">8</span>
Out<span class="token punctuation">[</span><span class="token number">29</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">72</span>

In <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">9</span> <span class="token operator">/</span> <span class="token number">3</span>
Out<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">3.0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,212),d=[r];function k(v,m){return s(),a("div",null,d)}const h=n(u,[["render",k],["__file","04-python-string.html.vue"]]);export{h as default};
