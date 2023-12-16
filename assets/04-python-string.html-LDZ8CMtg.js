import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-HwQT7Izv.js";const t="/assets/image-20231214083505664--FCZrLKE.png",i="/assets/image-20231215074000023-uDPObaGQ.png",p="/assets/image-20231215074315872-cnGeUbVN.png",o="/assets/image-20231215083113492-mrqZd7r1.png",l="/assets/image-20231215083057643-UueSs9hO.png",c={},r=e('<h2 id="_1-字符串的定义" tabindex="-1"><a class="header-anchor" href="#_1-字符串的定义" aria-hidden="true">#</a> 1.字符串的定义</h2><p>字符串是由字母，数字和特殊字符组成的特殊序列</p><figure><img src="'+t+`" alt="image-20231214083505664" tabindex="0" loading="lazy"><figcaption>image-20231214083505664</figcaption></figure><h2 id="_2-创建字符串" tabindex="-1"><a class="header-anchor" href="#_2-创建字符串" aria-hidden="true">#</a> 2.创建字符串</h2><p><strong>如何创建字符串？</strong></p><p>——使用单引号，双引号或者三引号</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> ‘Cindy’
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的输出可知，每行结尾添加 <code>\\</code> 只能实现看起来换行，实际上还是一行。「就是：一行显示不完，换行显示而已，但是本身还是一行」</p><figure><img src="`+i+`" alt="image-20231215074000023" tabindex="0" loading="lazy"><figcaption>image-20231215074000023</figcaption></figure><p>此时，我们使用三引号测试：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以从上面的输出可知，原本什么格式，输出就是什么格式。「原样输出」「三个单引号的效果和上面一样」</p><ul><li><strong><span style="color:orange;">三个单引号或者三个双引号，实现原样输出。</span></strong></li><li><strong><span style="color:orange;">多行注释</span></strong></li><li><strong><span style="color:orange;">单双三引号混用</span></strong>（代码略）</li></ul><figure><img src="`+p+`" alt="image-20231215074315872" tabindex="0" loading="lazy"><figcaption>image-20231215074315872</figcaption></figure><h2 id="_3-字符串长度" tabindex="-1"><a class="header-anchor" href="#_3-字符串长度" aria-hidden="true">#</a> 3. 字符串长度</h2><p>如何获取字符串长度？ —— <code>len()</code></p><p><code>len():</code>返回字符串中字符长度或字符数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>paragraph <span class="token operator">=</span> <span class="token string">&quot;Hello everyone!&quot;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方向相互冲突，所以没有结果</p><figure><img src="`+o+`" alt="image-20231215083113492" tabindex="0" loading="lazy"><figcaption>image-20231215083113492</figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Vervevividness&quot;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,91),u=[r];function d(v,m){return s(),a("div",null,u)}const g=n(c,[["render",d],["__file","04-python-string.html.vue"]]);export{g as default};
