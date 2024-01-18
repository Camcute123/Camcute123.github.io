import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as e}from"./app-5FL3lP7M.js";const t={},i=e(`<p>Sure, here&#39;s the translated markdown:</p><hr><h2 id="_1-understanding-variables-examples-from-daily-life" tabindex="-1"><a class="header-anchor" href="#_1-understanding-variables-examples-from-daily-life" aria-hidden="true">#</a> 1. Understanding Variables - Examples from Daily Life</h2><h3 id="_1-1-what-is-a-variable" tabindex="-1"><a class="header-anchor" href="#_1-1-what-is-a-variable" aria-hidden="true">#</a> 1.1 What is a Variable</h3><ul><li><strong>Vari</strong>: Change</li><li><strong>Able</strong>: Capacity</li></ul><h3 id="_1-2-an-example" tabindex="-1"><a class="header-anchor" href="#_1-2-an-example" aria-hidden="true">#</a> 1.2 An Example</h3><p>Let&#39;s say you&#39;re the class monitor and you need to compile the monthly test scores of each student in the class. Each month&#39;s score will be recorded on a paper, listing each student&#39;s score, for instance:</p><ol><li>Li Lei: 98 points</li><li>Ma Dongmei: 89 points</li><li>Liu Yitong: 96 points</li><li>...</li></ol><p>One day, the teacher wants to see Liu Yitong&#39;s scores for January, February, and March. As the class monitor, what do you do? Clearly, directly handing over each month&#39;s test score isn&#39;t appropriate.</p><p>We should copy Liu Yitong&#39;s January, February, and March scores onto a separate sheet of paper and then give it to the teacher.</p><p>So, why didn&#39;t we assign an envelope for each student from the beginning? (It could also be a file bag.) Initially, the envelope is flat. When we put things (data) in it, does it swell? Did it change? Did it gain size? Clearly, yes.</p><p>So, the envelope, did it allocate space in the current space we&#39;re in to store data and say, &quot;This is an envelope.&quot;</p><p>Similarities: The refrigerator also allocates space in the current space we&#39;re in.</p><p>---- Variables allocate space in the computer&#39;s memory ---- Variables can be overwritten</p><h2 id="_2-creating-variables-assignment-statements" tabindex="-1"><a class="header-anchor" href="#_2-creating-variables-assignment-statements" aria-hidden="true">#</a> 2. Creating Variables - Assignment Statements</h2><ol><li>Using a variable name to represent or reference a value</li></ol><ul><li>Nuwa made mud figures, the figures had no life. Nuwa waved a willow branch, giving life to the mud figures. At this moment, the mud figure can represent Nuwa&#39;s descendants. &quot;Variable: Mud figure, Value: Nuwa&quot;</li><li>The National People&#39;s Congress, the delegates of the NPC, are elected by the vast masses of the people. Their rights are not acquired by themselves, so they can say: &quot;I represent the will of the vast masses of the people.&quot; &quot;Variable: NPC delegate, Value: Masses&quot;</li></ul><ol start="2"><li>Initializing assignment statement: Variable Name = Expression</li></ol><ul><li>Variable Name: What we call this space</li><li>Expression: Similar to a mathematical expression</li></ul><p>Logic of the program: From top to bottom, from right to left, finally assigning a value.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name1 <span class="token operator">=</span> <span class="token string">&#39;WRYH&#39;</span>
name2 <span class="token operator">=</span> name1
<span class="token keyword">print</span><span class="token punctuation">(</span>name2<span class="token punctuation">)</span>
<span class="token comment"># Variable passing</span>

name1 <span class="token operator">=</span> <span class="token string">&quot;look&quot;</span>
name1 <span class="token operator">=</span> <span class="token string">&quot;WRYH&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name1<span class="token punctuation">)</span>
<span class="token comment"># Variable overwrite</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment"># 1 assigned to x</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">10</span> <span class="token comment"># x represents 1, so x + 10 == 1 + 10, after getting 11, it&#39;s assigned to variable x </span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment"># Print output</span>
<span class="token comment"># The hashtag is for comments, annotations, for easy understanding of the code and future maintenance.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-exploring-print" tabindex="-1"><a class="header-anchor" href="#_3-exploring-print" aria-hidden="true">#</a> 3. Exploring print</h2><hr><h3 id="_3-1-outputting-multiple-data-simultaneously" tabindex="-1"><a class="header-anchor" href="#_3-1-outputting-multiple-data-simultaneously" aria-hidden="true">#</a> 3.1 Outputting Multiple Data Simultaneously</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>

<span class="token comment"># Output: 1 1 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>From the output, it&#39;s evident that <code>print</code> outputs multiple variables simultaneously, with each value defaulting to a space between them. So, can we modify this default space? Obviously, yes. Using <code>sep</code>.</p><h3 id="_3-2-modifying-the-separator-for-multiple-simultaneous-outputs" tabindex="-1"><a class="header-anchor" href="#_3-2-modifying-the-separator-for-multiple-simultaneous-outputs" aria-hidden="true">#</a> 3.2 Modifying the Separator for Multiple Simultaneous Outputs</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot;.hhhhhh.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-modifying-the-print-output-ending" tabindex="-1"><a class="header-anchor" href="#_3-3-modifying-the-print-output-ending" aria-hidden="true">#</a> 3.3 Modifying the Print Output Ending</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

<span class="token comment"># Output:</span>
<span class="token comment"># 1</span>
<span class="token comment"># 1</span>
<span class="token comment"># 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;\\n\\n\\n&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token comment"># Output:</span>
<span class="token comment"># 1</span>
<span class="token comment">#</span>
<span class="token comment"># 1</span>
<span class="token comment"># 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;hello hello&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-using-end-and-sep-simultaneously" tabindex="-1"><a class="header-anchor" href="#_3-4-using-end-and-sep-simultaneously" aria-hidden="true">#</a> 3.4 Using <code>end</code> and <code>sep</code> Simultaneously</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> sep <span class="token operator">=</span> <span class="token string">&quot;~&quot;</span><span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token string">&quot; Hello&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># Output: 1~1~1 Hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-advanced-assignment-methods" tabindex="-1"><a class="header-anchor" href="#_4-advanced-assignment-methods" aria-hidden="true">#</a> 4. Advanced Assignment Methods</h2><h3 id="_4-1-assigning-the-same-value-to-multiple-variables-simultaneously" tabindex="-1"><a class="header-anchor" href="#_4-1-assigning-the-same-value-to-multiple-variables-simultaneously" aria-hidden="true">#</a> 4.1 Assigning the Same Value to Multiple Variables Simultaneously</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token comment"># Assigning the same value to multiple variables simultaneously</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-assigning-different-values-to-multiple-variables-simultaneously" tabindex="-1"><a class="header-anchor" href="#_4-2-assigning-different-values-to-multiple-variables-simultaneously" aria-hidden="true">#</a> 4.2 Assigning Different Values to Multiple Variables Simultaneously</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a, b, c = 1, 2, 3
print(a, b, c)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="practice" tabindex="-1"><a class="header-anchor" href="#practice" aria-hidden="true">#</a> Practice</h2><p>If you have two kids, an older brother named Austin and a younger brother named Jaden.</p><p>Austin wants <strong>juice</strong>, Jaden wants <strong>cola</strong>. <strong>Both brothers have their exclusive cups and don&#39;t like using each other&#39;s cups.</strong></p><p>At home, there&#39;s only one cup of juice and one cup of cola. You accidentally pour cola into the older brother&#39;s cup and juice into the younger brother&#39;s cup.</p><p><strong>Question: How do you exchange the juice between the cups of the older and younger brothers?</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Austin <span class="token operator">=</span> <span class="token string">&quot;Coke&quot;</span>  <span class="token comment"># This assignment can be understood as pouring juice</span>
Jaden <span class="token operator">=</span> <span class="token string">&quot;juice&quot;</span>  <span class="token comment"># This assignment can be understood as pouring juice</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Austin&quot;</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Jaden&quot;</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
Austin1 <span class="token operator">=</span> Jaden
Jaden1 <span class="token operator">=</span> Austin
Austin <span class="token operator">=</span> Austin1
Jaden <span class="token operator">=</span> Jaden1

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Austin&quot;</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Jaden&quot;</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Austin <span class="token operator">=</span> <span class="token string">&quot;Coke&quot;</span>  <span class="token comment"># This assignment can be understood as pouring juice</span>
Jaden <span class="token operator">=</span> <span class="token string">&quot;juice&quot;</span>  <span class="token comment"># This assignment can be understood as pouring juice</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Austin&quot;</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Jaden&quot;</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
Austin1 <span class="token operator">=</span> Austin
Austin <span class="token operator">=</span> Jaden
Jaden <span class="token operator">=</span> Austin1
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Austin&quot;</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Jaden&quot;</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Austin <span class="token operator">=</span> <span class="token string">&quot;Coke&quot;</span>  <span class="token comment"># This assignment can be understood as pouring juice</span>
Jaden <span class="token operator">=</span> <span class="token string">&quot;juice&quot;</span>  <span class="token comment"># This assignment can be understood as pouring juice</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Austin&quot;</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Jaden&quot;</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
Austin<span class="token punctuation">,</span> Jaden <span class="token operator">=</span> Jaden<span class="token punctuation">,</span> Austin
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Austin&quot;</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Jaden&quot;</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-naming-rules-for-variables" tabindex="-1"><a class="header-anchor" href="#_5-naming-rules-for-variables" aria-hidden="true">#</a> 5. Naming Rules for Variables</h2><ul><li><p>Combination of uppercase, lowercase, English, numbers, and __, and cannot start with a number;</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a1b2c3 <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># Cannot start with a number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>System keywords cannot be used as variable names;</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">as</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>Cannot be printed As = 1 aS = 1 a_s = 1 \`\`\`</p><pre><code>Get the keyword list: \`help(&#39;keywords&#39;)\`

\`\`\` python
Here is a list of the Python keywords.  Enter any keyword to get more help.

False               class               from                or
None                continue            global              pass
True                def                 if                  raise
and                 del                 import              return
as                  elif                in                  try
assert              else                is                  while
async               except              lambda              with
await               finally             nonlocal            yield
break               for                 not        
\`\`\`
</code></pre><p>​</p><ul><li><p>Variables are case-sensitive in Python</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n <span class="token operator">=</span> <span class="token number">1</span>
N <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span>

<span class="token comment"># 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Variable names cannot contain spaces, but can use underscores</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>user_name <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
username <span class="token operator">=</span> <span class="token string">&quot;hi&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Avoid using Python&#39;s built-in function names as variable names</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span> <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">print</span><span class="token punctuation">)</span>
<span class="token comment"># Cannot be printed</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_6-exercise" tabindex="-1"><a class="header-anchor" href="#_6-exercise" aria-hidden="true">#</a> 6. Exercise</h2><pre><code>1. In Python, variable names can start with a number.

    - [ ] True
    - [x] False

2. Which of the following variable names is valid in Python?

    - [ ] 2myVar
    - [x] myVar2
    - [ ] my-var
    - [ ] my var

3. Variable names in Python are case-sensitive.

    - [x] True
    - [ ] False

4. In Python, \`my_var\` and \`myVar\` refer to the same variable.

    - [ ] True
    - [x] False

5. Variable names can be Python keywords.

    - [ ] True
    - [x] False

6. \`None\` is a special type in Python, representing no value or an empty value.

    - [x] True
    - [ ] False

7. Which of the following is a valid variable assignment in Python?

    - [x] 123abc = &quot;hello&quot;
    - [ ] for = &quot;world&quot;
    - [ ] _hidden = &quot;secret&quot;
    - [ ] import = 123

8. A variable in Python can be assigned multiple values simultaneously.

    - [ ] True
    - [x] False

9. Which of the following is a multi-variable assignment in Python?

    - [x] a, b, c = 1, 2, 3
    - [ ] a = 1, b = 2, c = 3
    - [ ] a; b; c = 1; 2; 3
    - [ ] a = 1; b = 2; c = 3;

10. Variables must be assigned a value before using them.

    - [x] True
    - [ ] False

11. The type of variables in Python is static; once assigned, it cannot be changed.

    - [ ] True
    - [x] False

12. In Python, which represents a global variable?

    - [x] var = &quot;hello&quot;
    - [ ] global var
    - [ ] var(global)
    - [ ] def var():

13. Which represents deleting a variable?

    - [ ] delete x
    - [x] del x
    - [ ] remove x
    - [ ] destroy x

        \`\`\`python
        my_variable = &quot;Hello, World!&quot;
        print(my_variable)
        
        # Delete the variable
        del my_variable
        
        # Attempting to access a deleted variable will raise a NameError
        # print(my_variable)
        
        \`\`\`
</code></pre><p>​</p><pre><code>14. \`x = 5\`, then \`y = x\`, if you change the value of \`y\`, the value of \`x\` will also change.

    - [ ] True
    - [x] False

15. \`x = [1, 2, 3]\`, then \`y = x\`, if you change the list content of \`y\`, the content of \`x\` will also change.❌

    - [x] True
    - [ ] False

16. In Python, variables can only store basic data types, such as integers or strings.

    - [ ] True
    - [x] False
</code></pre><p>​</p>`,59),o=[i];function l(p,r){return a(),s("div",null,o)}const d=n(t,[["render",l],["__file","01-variable.html.vue"]]);export{d as default};
