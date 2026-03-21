export const projects = [
  {
    slug: "meridian",
    title: "Meridian",
    category: "Infrastructure",
    description:
      "A distributed systems platform for real-time data processing at scale. Built to handle millions of events per second with sub-millisecond latency.",
    tags: ["Rust", "Go", "Kubernetes"],
    status: "Production",
    fullDescription: `Meridian represents our vision for the future of data infrastructure. Built from the ground up to handle the demands of modern distributed systems, it provides a unified platform for real-time data processing, stream analytics, and event-driven architectures.

The platform is designed around three core principles: predictable latency, horizontal scalability, and operational simplicity. Every component has been engineered to maintain sub-millisecond latency even under extreme load conditions.`,
    challenges: [
      "Processing millions of events per second with consistent sub-millisecond latency",
      "Maintaining data consistency across globally distributed nodes",
      "Providing intuitive debugging tools for complex distributed workflows",
    ],
    approach: `We started with a clean-slate approach, building our own consensus protocol optimized for high-throughput scenarios. The system uses a novel partitioning scheme that automatically balances load while minimizing data movement.

The control plane is written in Go for its excellent concurrency primitives, while the data plane leverages Rust for zero-cost abstractions and predictable performance. This hybrid approach gives us the best of both worlds.`,
    outcomes: [
      "Sustained throughput of 2.4 million events/second per node",
      "P99 latency under 800 microseconds",
      "Zero-downtime deployments and automatic failover",
    ],
    year: "2024 - Present",
  },
  {
    slug: "canvas",
    title: "Canvas",
    category: "Developer Tools",
    description:
      "Visual programming environment for complex system design. Enables teams to model, simulate, and deploy distributed architectures.",
    tags: ["TypeScript", "WebGL", "WASM"],
    status: "Beta",
    fullDescription: `Canvas reimagines how teams design and understand complex systems. Rather than forcing engineers to hold entire architectures in their heads, Canvas provides a visual workspace where systems can be modeled, simulated, and deployed.

The tool bridges the gap between whiteboard diagrams and production infrastructure, enabling teams to iterate on system designs with immediate feedback.`,
    challenges: [
      "Creating a visual language expressive enough for complex distributed systems",
      "Achieving real-time simulation performance in the browser",
      "Generating production-ready infrastructure code from visual models",
    ],
    approach: `We developed a custom graph rendering engine using WebGL, capable of smoothly handling diagrams with thousands of nodes. The simulation engine runs in WebAssembly, providing near-native performance for complex calculations.

The code generation system uses a constraint-solving approach to produce optimized infrastructure configurations that respect the relationships defined in the visual model.`,
    outcomes: [
      "60fps rendering with 10,000+ nodes",
      "Real-time simulation of distributed consensus algorithms",
      "One-click deployment to major cloud providers",
    ],
    year: "2025 - Present",
  },
  {
    slug: "forge",
    title: "Forge",
    category: "Hardware Interface",
    description:
      "Unified firmware development kit bridging embedded systems and cloud infrastructure. From microcontrollers to edge computing.",
    tags: ["C++", "Embedded", "IoT"],
    status: "Development",
    fullDescription: `Forge addresses the growing complexity of building products that span from tiny microcontrollers to cloud backends. It provides a unified development experience that abstracts away the differences between these environments while preserving full control when needed.

The toolkit includes a cross-platform build system, over-the-air update infrastructure, and observability tools designed for resource-constrained devices.`,
    challenges: [
      "Supporting the full spectrum from 8-bit microcontrollers to edge servers",
      "Providing meaningful debugging for devices with minimal resources",
      "Enabling secure, reliable over-the-air updates at scale",
    ],
    approach: `Forge is built around a layered abstraction model. The core runtime is written in C++ with aggressive optimization for code size and memory usage. Higher-level features can be progressively enabled based on device capabilities.

Our update system uses a novel delta compression algorithm that reduces update sizes by up to 95%, making frequent updates practical even over constrained networks.`,
    outcomes: [
      "Single codebase targets 50+ device families",
      "Runtime overhead under 4KB on constrained devices",
      "Secure boot and encrypted update pipeline",
    ],
    year: "2025 - Present",
  },
]

export const articles = [
  {
    slug: "building-resilient-distributed-systems",
    title: "On Building Resilient Distributed Systems",
    date: "March 2026",
    readTime: "12 min read",
    excerpt:
      "Exploring patterns for fault tolerance and graceful degradation in modern distributed architectures.",
    content: `Modern distributed systems face an uncomfortable reality: failure is not an exception, it's the norm. Networks partition, disks fail, processes crash. The question isn't whether these failures will occur, but how our systems respond when they inevitably do.

## The Illusion of Reliability

We often design systems as if individual components are reliable and then add error handling as an afterthought. This approach is fundamentally backwards. True resilience requires accepting unreliability as a first principle and designing systems that maintain useful behavior despite it.

## Patterns for Graceful Degradation

### Circuit Breakers

The circuit breaker pattern prevents cascade failures by failing fast when a dependency becomes unhealthy. Rather than waiting for timeouts, the system quickly returns errors or fallback responses, preserving resources for requests that can succeed.

### Bulkheads

Named after ship compartments that contain flooding, bulkheads isolate failures to specific subsystems. By partitioning resources—thread pools, connection pools, memory—failures in one area cannot starve others.

### Timeouts and Retries

Every network call needs a timeout. Without one, a single slow dependency can exhaust all available resources. Retries must be implemented with exponential backoff and jitter to prevent thundering herds.

## Building for Partial Failure

The most resilient systems are designed to function partially. When the recommendation service fails, show popular items. When the analytics pipeline backs up, accept writes and process later. These graceful degradation strategies preserve the most critical functionality.

## Observability as Foundation

You cannot build resilient systems without understanding how they fail. Comprehensive logging, metrics, and distributed tracing are not optional—they're the foundation upon which all other resilience strategies are built.`,
    topics: ["Distributed Systems", "Systems Architecture"],
  },
  {
    slug: "case-for-vertical-integration",
    title: "The Case for Vertical Integration",
    date: "February 2026",
    readTime: "8 min read",
    excerpt:
      "Why controlling the full stack—from hardware to user interface—creates better products.",
    content: `There's a prevailing wisdom in technology that companies should focus on their core competency and outsource everything else. While this makes sense in many contexts, we've found that vertical integration—controlling the full stack from hardware to user interface—enables a category of products that would otherwise be impossible.

## The Integration Tax

When you build on components from multiple vendors, you pay an integration tax. Each interface between components adds latency, complexity, and potential failure modes. These costs compound as systems grow more complex.

## Optimization Across Boundaries

The most significant optimizations often require changes that span traditional boundaries. When you control both the hardware and software, you can make tradeoffs that would be impossible with off-the-shelf components.

Consider how Apple's custom silicon enables features that would be impractical with commodity processors. Or how Tesla's vertical integration allows over-the-air updates to improve vehicle performance.

## The Feedback Loop Advantage

Vertical integration creates faster feedback loops. When the team building the hardware works closely with the team building the software, problems are discovered earlier and solutions are more elegant.

## When to Integrate Vertically

Vertical integration makes sense when:
- The interfaces between components are a significant source of complexity or performance limitations
- Your use case differs significantly from the mainstream, making commodity solutions suboptimal
- Long-term control and customization outweigh the upfront investment

## The Operational Challenge

Vertical integration isn't free. It requires broader expertise, more capital, and longer timelines. But for the right problems, the results justify the investment.`,
    topics: ["Systems Architecture", "Hardware Interface"],
  },
  {
    slug: "rethinking-developer-experience",
    title: "Rethinking Developer Experience",
    date: "January 2026",
    readTime: "10 min read",
    excerpt:
      "How we approach tooling design to reduce cognitive load and increase engineering velocity.",
    content: `Developer tools have a profound impact on engineering velocity. Yet most tools are designed around technical constraints rather than human factors. We believe there's an opportunity to rethink developer experience from first principles.

## Cognitive Load is the Enemy

Every tool, every abstraction, every configuration option adds cognitive load. This load accumulates throughout the day, leaving less mental capacity for the actual problem at hand.

Good developer tools minimize cognitive load by:
- Providing sensible defaults that work for the common case
- Making the right thing the easy thing
- Surfacing information at the moment it's needed, not before

## The Power of Immediate Feedback

The time between making a change and seeing its effect is critical. Long feedback loops don't just slow development—they fundamentally change how we work, encouraging batch changes and reducing experimentation.

We invest heavily in reducing feedback loops:
- Hot reloading that preserves application state
- Incremental compilation that rebuilds only what changed
- Preview environments that spin up in seconds

## Error Messages as Documentation

Error messages are often the first interaction developers have with a tool's mental model. Yet they're frequently an afterthought—cryptic codes that require searching external documentation.

We treat error messages as first-class user interface:
- Clear explanation of what went wrong
- Actionable suggestions for how to fix it
- Links to relevant documentation when appropriate

## Building for the Debug Loop

Developers spend significant time debugging. Tools should be designed with this reality in mind, providing rich introspection capabilities and making system state visible.

The best developer tools don't just help you write code—they help you understand what your code is doing.`,
    topics: ["Developer Tools", "Human-Computer Interaction"],
  },
]

export const topics = [
  "Distributed Systems",
  "Embedded Computing",
  "Human-Computer Interaction",
  "Systems Architecture",
  "Developer Tools",
  "Edge Computing",
]
