import { createConfig } from "@ponder/core";
import { http } from "viem";
import { MatchingEngineABI } from "./abis/matchingengineAbi";

export default createConfig({
  networks: {
    deployed: {
      chainId: process.env.CHAINID,
      transport: http(process.env.RPC)
    }
  },
  contracts: {
    matchingEngine: {
      abi: MatchingEngineABI,
      address: process.env.CONTRACT,
      network: {
        deployed: {
          startBlock: process.env.STARTBLOCK,
        }
      }
    }
  }
});
