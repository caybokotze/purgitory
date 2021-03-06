#!/usr/bin/env node

import { start } from "./app";
import yargs from "yargs";

const args = yargs.usage("Usage: purgit [options]").option("dry-run", {
  alias: "d",
  type: "boolean",
  default: false,
  description: "A rehearsal, no side effects",
}).argv;

start(args);
