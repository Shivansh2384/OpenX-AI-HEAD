import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Copy,
  Check,
  MessageSquare,
  Code2,
  Brain,
  Wrench,
  FileText,
  Image,
  Database,
  Mic,
  Zap,
  Filter,
  BookOpen,
  Terminal,
  Bot,
  Globe,
  Braces,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ─── Copy Button ─── */
function CopyBtn({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setOk(true);
        setTimeout(() => setOk(false), 2000);
      }}
      className="p-1.5 rounded-md hover:bg-white/[0.06] transition-colors"
      title="Copy"
    >
      {ok ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 text-surface-500" />}
    </button>
  );
}

/* ─── Types ─── */
type Category = 'All' | 'Chat' | 'Coding' | 'Reasoning' | 'Tools' | 'Structured' | 'Vision' | 'Embeddings' | 'Audio' | 'Agents';
type Lang = 'javascript' | 'python' | 'curl';

interface ExampleItem {
  id: string;
  category: Exclude<Category, 'All'>;
  icon: typeof MessageSquare;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  code: Record<Lang, string>;
}

/* ─── Examples ─── */
const examples: ExampleItem[] = [
  {
    id: 'chat-completion',
    category: 'Chat',
    icon: MessageSquare,
    title: 'Basic Chat Completion',
    description: 'Start a conversation with ShivanshAI-1.1 using system and user messages.',
    difficulty: 'Beginner',
    tags: ['chat', 'system-prompt', 'conversation'],
    code: {
      javascript: `import OpenX from 'openx';

const client = new OpenX();

const response = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Explain quantum computing simply.' },
  ],
});

console.log(response.choices[0].message.content);`,
      python: `from openx import OpenX

client = OpenX()

response = client.chat.completions.create(
    model="shivansh-ai-1.1",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing simply."},
    ]
)

print(response.choices[0].message.content)`,
      curl: `curl https://api.openx.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -d '{
    "model": "shivansh-ai-1.1",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Explain quantum computing simply."}
    ]
  }'`,
    },
  },
  {
    id: 'streaming',
    category: 'Chat',
    icon: Zap,
    title: 'Streaming Responses',
    description: 'Stream tokens in real time for responsive UIs and chat experiences.',
    difficulty: 'Intermediate',
    tags: ['streaming', 'sse', 'realtime'],
    code: {
      javascript: `import OpenX from 'openx';

const client = new OpenX();

const stream = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [{ role: 'user', content: 'Write a poem about AI.' }],
  stream: true,
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content || '';
  process.stdout.write(content);
}`,
      python: `from openx import OpenX

client = OpenX()

stream = client.chat.completions.create(
    model="shivansh-ai-1.1",
    messages=[{"role": "user", "content": "Write a poem about AI."}],
    stream=True,
)

for chunk in stream:
    content = chunk.choices[0].delta.content or ""
    print(content, end="", flush=True)`,
      curl: `curl https://api.openx.ai/v1/chat/completions \\
  -N \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -d '{
    "model": "shivansh-ai-1.1",
    "messages": [{"role": "user", "content": "Write a poem about AI."}],
    "stream": true
  }'`,
    },
  },
  {
    id: 'code-generation',
    category: 'Coding',
    icon: Code2,
    title: 'Code Generation',
    description: 'Generate clean, production-quality code in any language.',
    difficulty: 'Beginner',
    tags: ['coding', 'typescript', 'generation'],
    code: {
      javascript: `const response = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [
    {
      role: 'user',
      content: 'Write a TypeScript function that implements binary search on a sorted array.'
    },
  ],
});`,
      python: `response = client.chat.completions.create(
    model="shivansh-ai-1.1",
    messages=[{
        "role": "user",
        "content": "Write a TypeScript function that implements binary search on a sorted array."
    }]
)`,
      curl: `curl https://api.openx.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -d '{
    "model": "shivansh-ai-1.1",
    "messages": [{
      "role": "user",
      "content": "Write a TypeScript function that implements binary search on a sorted array."
    }]
  }'`,
    },
  },
  {
    id: 'advanced-reasoning',
    category: 'Reasoning',
    icon: Brain,
    title: 'Advanced Reasoning',
    description: 'Multi-step logical reasoning with configurable reasoning depth.',
    difficulty: 'Intermediate',
    tags: ['reasoning', 'logic', 'chain-of-thought'],
    code: {
      javascript: `const response = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [{
    role: 'user',
    content: 'A farmer has 17 sheep. All but 9 die. How many are left? Think step by step.'
  }],
  reasoning_depth: 4,
  temperature: 0,
});`,
      python: `response = client.chat.completions.create(
    model="shivansh-ai-1.1",
    messages=[{
        "role": "user",
        "content": "A farmer has 17 sheep. All but 9 die. How many are left? Think step by step."
    }],
    reasoning_depth=4,
    temperature=0,
)`,
      curl: `curl https://api.openx.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -d '{
    "model": "shivansh-ai-1.1",
    "messages": [{
      "role": "user",
      "content": "A farmer has 17 sheep. All but 9 die. How many are left? Think step by step."
    }],
    "reasoning_depth": 4,
    "temperature": 0
  }'`,
    },
  },
  {
    id: 'function-calling',
    category: 'Tools',
    icon: Wrench,
    title: 'Function Calling',
    description: 'Let the model call external tools and APIs using JSON Schema definitions.',
    difficulty: 'Advanced',
    tags: ['tools', 'functions', 'json-schema'],
    code: {
      javascript: `const response = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [{ role: 'user', content: 'What is the weather in Tokyo?' }],
  tools: [{
    type: 'function',
    function: {
      name: 'get_weather',
      description: 'Get weather for a location',
      parameters: {
        type: 'object',
        properties: { location: { type: 'string' } },
        required: ['location'],
      },
    },
  }],
});

console.log(response.choices[0].message.tool_calls);`,
      python: `tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Get weather for a location",
        "parameters": {
            "type": "object",
            "properties": {"location": {"type": "string"}},
            "required": ["location"]
        }
    }
}]

response = client.chat.completions.create(
    model="shivansh-ai-1.1",
    messages=[{"role": "user", "content": "What is the weather in Tokyo?"}],
    tools=tools,
)`,
      curl: `curl https://api.openx.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -d '{
    "model": "shivansh-ai-1.1",
    "messages": [{"role": "user", "content": "What is the weather in Tokyo?"}],
    "tools": [{
      "type": "function",
      "function": {
        "name": "get_weather",
        "description": "Get weather for a location",
        "parameters": {
          "type": "object",
          "properties": {"location": {"type": "string"}},
          "required": ["location"]
        }
      }
    }]
  }'`,
    },
  },
  {
    id: 'structured-output',
    category: 'Structured',
    icon: FileText,
    title: 'Structured Output (JSON Schema)',
    description: 'Get reliable JSON responses with schema validation and type safety.',
    difficulty: 'Advanced',
    tags: ['json', 'schema', 'extraction'],
    code: {
      javascript: `const response = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [{
    role: 'user',
    content: 'Extract the name and age from: John is 28 years old.'
  }],
  response_format: {
    type: 'json_schema',
    json_schema: {
      name: 'person',
      schema: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          age: { type: 'number' }
        },
        required: ['name', 'age']
      }
    }
  }
});`,
      python: `response = client.chat.completions.create(
    model="shivansh-ai-1.1",
    messages=[{
        "role": "user",
        "content": "Extract the name and age from: John is 28 years old."
    }],
    response_format={
        "type": "json_schema",
        "json_schema": {
            "name": "person",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {"type": "string"},
                    "age": {"type": "number"}
                },
                "required": ["name", "age"]
            }
        }
    }
)`,
      curl: `curl https://api.openx.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -d '{
    "model": "shivansh-ai-1.1",
    "messages": [{
      "role": "user",
      "content": "Extract the name and age from: John is 28 years old."
    }],
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "person",
        "schema": {
          "type": "object",
          "properties": {
            "name": {"type": "string"},
            "age": {"type": "number"}
          },
          "required": ["name", "age"]
        }
      }
    }
  }'`,
    },
  },
  {
    id: 'image-analysis',
    category: 'Vision',
    icon: Image,
    title: 'Image Analysis',
    description: 'Analyze and describe images with multi-modal input using URLs or base64.',
    difficulty: 'Intermediate',
    tags: ['vision', 'image', 'multimodal'],
    code: {
      javascript: `const response = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [{
    role: 'user',
    content: [
      { type: 'text', text: 'Describe this image in detail.' },
      { type: 'image_url', image_url: { url: 'https://example.com/photo.jpg' } },
    ],
  }],
});`,
      python: `response = client.chat.completions.create(
    model="shivansh-ai-1.1",
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "Describe this image in detail."},
            {"type": "image_url", "image_url": {"url": "https://example.com/photo.jpg"}},
        ]
    }]
)`,
      curl: `curl https://api.openx.ai/v1/images/analyze \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -d '{
    "model": "shivansh-ai-1.1",
    "messages": [{
      "role": "user",
      "content": [
        {"type": "text", "text": "Describe this image in detail."},
        {"type": "image_url", "image_url": {"url": "https://example.com/photo.jpg"}}
      ]
    }]
  }'`,
    },
  },
  {
    id: 'embeddings',
    category: 'Embeddings',
    icon: Database,
    title: 'Generate Embeddings',
    description: 'Create vector embeddings for search, clustering, and RAG pipelines.',
    difficulty: 'Beginner',
    tags: ['embeddings', 'rag', 'search'],
    code: {
      javascript: `const embedding = await client.embeddings.create({
  model: 'shivansh-embed-1.0',
  input: 'The quick brown fox jumps over the lazy dog',
});

console.log(embedding.data[0].embedding);`,
      python: `embedding = client.embeddings.create(
    model="shivansh-embed-1.0",
    input="The quick brown fox jumps over the lazy dog"
)

print(embedding.data[0].embedding)`,
      curl: `curl https://api.openx.ai/v1/embeddings \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -d '{
    "model": "shivansh-embed-1.0",
    "input": "The quick brown fox jumps over the lazy dog"
  }'`,
    },
  },
  {
    id: 'audio-transcription',
    category: 'Audio',
    icon: Mic,
    title: 'Audio Transcription',
    description: 'Transcribe MP3, WAV, M4A, and WebM files into text.',
    difficulty: 'Beginner',
    tags: ['audio', 'transcription', 'speech-to-text'],
    code: {
      javascript: `const fs = require('fs');

const transcript = await client.audio.transcriptions.create({
  file: fs.createReadStream('recording.mp3'),
  model: 'shivansh-ai-1.1',
  response_format: 'verbose_json',
});

console.log(transcript.text);`,
      python: `with open("recording.mp3", "rb") as audio_file:
    transcript = client.audio.transcriptions.create(
        file=audio_file,
        model="shivansh-ai-1.1",
        response_format="verbose_json"
    )

print(transcript.text)`,
      curl: `curl https://api.openx.ai/v1/audio/transcribe \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -F file="@recording.mp3" \\
  -F model="shivansh-ai-1.1" \\
  -F response_format="verbose_json"`,
    },
  },
  {
    id: 'agentic-workflow',
    category: 'Agents',
    icon: Bot,
    title: 'Agentic Workflow',
    description: 'Build autonomous workflows that plan, use tools, and iterate on tasks.',
    difficulty: 'Advanced',
    tags: ['agents', 'automation', 'multi-step'],
    code: {
      javascript: `const response = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [{
    role: 'user',
    content: 'Research the top 3 AI conferences in 2026 and summarize their submission deadlines.'
  }],
  tools: [webSearchTool, summarizeTool, dateParserTool],
  reasoning_depth: 5,
  max_tokens: 4096,
});`,
      python: `response = client.chat.completions.create(
    model="shivansh-ai-1.1",
    messages=[{
        "role": "user",
        "content": "Research the top 3 AI conferences in 2026 and summarize their submission deadlines."
    }],
    tools=[web_search_tool, summarize_tool, date_parser_tool],
    reasoning_depth=5,
    max_tokens=4096,
)`,
      curl: `curl https://api.openx.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -d '{
    "model": "shivansh-ai-1.1",
    "messages": [{
      "role": "user",
      "content": "Research the top 3 AI conferences in 2026 and summarize their submission deadlines."
    }],
    "reasoning_depth": 5,
    "max_tokens": 4096
  }'`,
    },
  },
];

const categories: Category[] = ['All', 'Chat', 'Coding', 'Reasoning', 'Tools', 'Structured', 'Vision', 'Embeddings', 'Audio', 'Agents'];
const languages: Lang[] = ['javascript', 'python', 'curl'];

/* ─── Component ─── */
export default function Examples() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [activeLanguage, setActiveLanguage] = useState<Lang>('javascript');
  const [searchQuery, setSearchQuery] = useState('');
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  const filtered = useMemo(() => {
    return examples.filter((ex) => {
      const matchesCategory = activeCategory === 'All' || ex.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === '' ||
        ex.title.toLowerCase().includes(q) ||
        ex.description.toLowerCase().includes(q) ||
        ex.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen pt-20">
      {/* ═══════════ HERO ═══════════ */}
      <section ref={heroRef} className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-brand-600/[0.06] blur-[180px]" />
          <div className="absolute inset-0 bg-dot-grid opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-surface-300 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-3 py-1 text-[11px] font-semibold text-brand-300 uppercase tracking-wider mb-6">
              <Code2 className="h-3 w-3" /> Examples
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Ready-to-Run{' '}
              <span className="text-gradient-main">Code Examples</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-3xl">
              Production-ready snippets for the most common ShivanshAI-1.1 use cases.
              Copy, paste, and build — in JavaScript, Python, or cURL.
            </p>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 max-w-xl"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-surface-600" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search examples by title or tag..."
                  className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] pl-12 pr-5 py-4 text-base text-white placeholder-surface-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-surface-500 hover:text-surface-300 transition-colors">
                    Clear
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FILTERS ═══════════ */}
      <section className="py-8 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
            {/* Category pills */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="h-4 w-4 text-surface-600" />
                <span className="text-xs font-semibold text-surface-500 uppercase tracking-wider">Categories</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? 'bg-white text-surface-950'
                        : 'text-surface-500 hover:text-surface-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Language toggle */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Braces className="h-4 w-4 text-surface-600" />
                <span className="text-xs font-semibold text-surface-500 uppercase tracking-wider">Language</span>
              </div>
              <div className="inline-flex rounded-full border border-white/[0.06] bg-white/[0.02] p-1">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLanguage(lang)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeLanguage === lang
                        ? 'bg-white text-surface-950 shadow-md'
                        : 'text-surface-500 hover:text-surface-200'
                    }`}
                  >
                    {lang === 'javascript' ? 'JavaScript' : lang === 'python' ? 'Python' : 'cURL'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-surface-500">
            Showing <span className="text-surface-300 font-medium">{filtered.length}</span> example{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* ═══════════ EXAMPLES GRID ═══════════ */}
      <section className="py-12 sm:py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {filtered.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-5">
              {filtered.map((ex, i) => (
                <motion.div
                  key={ex.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden hover:border-white/[0.1] transition-all"
                >
                  {/* Header */}
                  <div className="px-5 sm:px-6 py-4 border-b border-white/[0.05] bg-white/[0.01]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="h-10 w-10 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center shrink-0">
                          <ex.icon className="h-5 w-5 text-brand-400" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="text-lg font-semibold text-white">{ex.title}</h3>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              ex.difficulty === 'Beginner'
                                ? 'bg-emerald-500/10 text-emerald-400'
                                : ex.difficulty === 'Intermediate'
                                ? 'bg-amber-500/10 text-amber-400'
                                : 'bg-rose-500/10 text-rose-400'
                            }`}>
                              {ex.difficulty}
                            </span>
                          </div>
                          <p className="text-sm text-surface-500 leading-relaxed">{ex.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {ex.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-medium text-surface-500 bg-white/[0.04] border border-white/[0.05]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Code */}
                  <div className="relative bg-[#0c0c0c] group">
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <CopyBtn text={ex.code[activeLanguage]} />
                    </div>
                    <pre className="p-5 sm:p-6 overflow-x-auto">
                      <code className="text-[13px] font-mono text-surface-400 leading-relaxed">
                        {ex.code[activeLanguage]}
                      </code>
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <Search className="h-8 w-8 text-surface-700 mx-auto mb-4" />
              <p className="text-surface-500 text-lg">No examples found</p>
              <p className="text-surface-600 text-sm mt-1">Try a different search term or category.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-4 text-sm text-brand-400 hover:text-brand-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ RESOURCES ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, title: 'Documentation', desc: 'Step-by-step guides', link: '/docs' },
              { icon: Braces, title: 'API Reference', desc: 'Full endpoint docs', link: '/api-reference' },
              { icon: Terminal, title: 'SDKs', desc: 'Official client libraries', link: '/sdk' },
              { icon: Globe, title: 'Platform', desc: 'Infrastructure overview', link: '/platform' },
            ].map((r) => (
              <Link
                key={r.title}
                to={r.link}
                className="group p-5 rounded-xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all"
              >
                <r.icon className="h-5 w-5 text-brand-400 mb-3" />
                <h3 className="font-semibold text-white group-hover:text-brand-300 transition-colors">{r.title}</h3>
                <p className="text-sm text-surface-500 mt-1">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950" />
            <div className="absolute inset-0 bg-dot-grid opacity-20" />
            <div className="absolute top-0 left-1/3 w-[500px] h-[300px] rounded-full bg-brand-400/[0.1] blur-[120px]" />

            <div className="relative z-10 px-8 sm:px-16 py-14 sm:py-18 text-center">
              <Code2 className="h-10 w-10 text-brand-300 mx-auto mb-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Start Building with These Examples
              </h2>
              <p className="mt-4 text-brand-100/60 max-w-lg mx-auto">
                Grab your API key, copy an example, and ship something amazing in minutes.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/signup"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors"
                >
                  Get API Key
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/community"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors"
                >
                  Join the Community
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
