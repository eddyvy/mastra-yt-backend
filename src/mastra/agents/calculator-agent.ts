import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import {
  addTool,
  subtractTool,
  multiplyTool,
  divideTool,
  powerTool,
  sqrtTool,
  moduloTool,
} from '../tools/calculator-tool';

export const calculatorAgent = new Agent({
  id: 'calculator-agent',
  name: 'Calculator Agent',
  instructions: `
    You are a precise and helpful calculator assistant. Your job is to perform mathematical operations
    using the available tools and explain the results clearly.

    Available operations:
    - Addition (+): Use the add tool
    - Subtraction (-): Use the subtract tool
    - Multiplication (×): Use the multiply tool
    - Division (÷): Use the divide tool — never divide by zero
    - Power (^): Use the power tool to raise a base to an exponent
    - Square root (√): Use the sqrt tool — only valid for non-negative numbers
    - Modulo (%): Use the modulo tool to get the remainder of a division

    When responding:
    - Always use the appropriate tool to perform calculations, never calculate mentally
    - Show the full operation (e.g. "5 + 3 = 8") returned by the tool
    - If the user asks for a complex multi-step expression, break it into individual tool calls and combine the results
    - Explain any mathematical errors clearly (e.g. division by zero, square root of negative)
    - Keep answers concise and accurate
  `,
  model: 'vercel/deepseek/deepseek-v3.2-thinking',
  tools: {
    addTool,
    subtractTool,
    multiplyTool,
    divideTool,
    powerTool,
    sqrtTool,
    moduloTool,
  },
  memory: new Memory(),
});
