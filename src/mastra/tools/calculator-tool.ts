import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const addTool = createTool({
  id: 'add',
  description: 'Adds two numbers and returns the result',
  inputSchema: z.object({
    a: z.number().describe('First number'),
    b: z.number().describe('Second number'),
  }),
  outputSchema: z.object({
    result: z.number(),
    operation: z.string(),
  }),
  execute: async ({ a, b }) => ({
    result: a + b,
    operation: `${a} + ${b} = ${a + b}`,
  }),
});

export const subtractTool = createTool({
  id: 'subtract',
  description: 'Subtracts the second number from the first and returns the result',
  inputSchema: z.object({
    a: z.number().describe('First number (minuend)'),
    b: z.number().describe('Second number (subtrahend)'),
  }),
  outputSchema: z.object({
    result: z.number(),
    operation: z.string(),
  }),
  execute: async ({ a, b }) => ({
    result: a - b,
    operation: `${a} - ${b} = ${a - b}`,
  }),
});

export const multiplyTool = createTool({
  id: 'multiply',
  description: 'Multiplies two numbers and returns the result',
  inputSchema: z.object({
    a: z.number().describe('First number'),
    b: z.number().describe('Second number'),
  }),
  outputSchema: z.object({
    result: z.number(),
    operation: z.string(),
  }),
  execute: async ({ a, b }) => ({
    result: a * b,
    operation: `${a} × ${b} = ${a * b}`,
  }),
});

export const divideTool = createTool({
  id: 'divide',
  description: 'Divides the first number by the second and returns the result',
  inputSchema: z.object({
    a: z.number().describe('Dividend (number to divide)'),
    b: z.number().describe('Divisor (number to divide by)'),
  }),
  outputSchema: z.object({
    result: z.number(),
    operation: z.string(),
  }),
  execute: async ({ a, b }) => {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return {
      result: a / b,
      operation: `${a} ÷ ${b} = ${a / b}`,
    };
  },
});

export const powerTool = createTool({
  id: 'power',
  description: 'Raises a base number to the given exponent and returns the result',
  inputSchema: z.object({
    base: z.number().describe('The base number'),
    exponent: z.number().describe('The exponent'),
  }),
  outputSchema: z.object({
    result: z.number(),
    operation: z.string(),
  }),
  execute: async ({ base, exponent }) => {
    const result = Math.pow(base, exponent);
    return {
      result,
      operation: `${base}^${exponent} = ${result}`,
    };
  },
});

export const sqrtTool = createTool({
  id: 'sqrt',
  description: 'Calculates the square root of a number',
  inputSchema: z.object({
    value: z.number().describe('The number to calculate the square root of'),
  }),
  outputSchema: z.object({
    result: z.number(),
    operation: z.string(),
  }),
  execute: async ({ value }) => {
    if (value < 0) {
      throw new Error('Cannot calculate square root of a negative number');
    }
    const result = Math.sqrt(value);
    return {
      result,
      operation: `√${value} = ${result}`,
    };
  },
});

export const moduloTool = createTool({
  id: 'modulo',
  description: 'Returns the remainder of the division of the first number by the second',
  inputSchema: z.object({
    a: z.number().describe('Dividend'),
    b: z.number().describe('Divisor'),
  }),
  outputSchema: z.object({
    result: z.number(),
    operation: z.string(),
  }),
  execute: async ({ a, b }) => {
    if (b === 0) {
      throw new Error('Modulo by zero is not allowed');
    }
    return {
      result: a % b,
      operation: `${a} % ${b} = ${a % b}`,
    };
  },
});
