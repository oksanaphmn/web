// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgDeleteUsers } from "./types/newvuetest/newvuetest/tx";
import { MsgCreateUsers } from "./types/newvuetest/newvuetest/tx";
import { MsgUpdateUsers } from "./types/newvuetest/newvuetest/tx";

import { Params as typeParams} from "./types"
import { Users as typeUsers} from "./types"

export { MsgDeleteUsers, MsgCreateUsers, MsgUpdateUsers };

type sendMsgDeleteUsersParams = {
  value: MsgDeleteUsers,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateUsersParams = {
  value: MsgCreateUsers,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateUsersParams = {
  value: MsgUpdateUsers,
  fee?: StdFee,
  memo?: string
};


type msgDeleteUsersParams = {
  value: MsgDeleteUsers,
};

type msgCreateUsersParams = {
  value: MsgCreateUsers,
};

type msgUpdateUsersParams = {
  value: MsgUpdateUsers,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgDeleteUsers({ value, fee, memo }: sendMsgDeleteUsersParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteUsers: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteUsers({ value: MsgDeleteUsers.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteUsers: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateUsers({ value, fee, memo }: sendMsgCreateUsersParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateUsers: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateUsers({ value: MsgCreateUsers.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateUsers: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateUsers({ value, fee, memo }: sendMsgUpdateUsersParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateUsers: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateUsers({ value: MsgUpdateUsers.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateUsers: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgDeleteUsers({ value }: msgDeleteUsersParams): EncodeObject {
			try {
				return { typeUrl: "/newvuetest.newvuetest.MsgDeleteUsers", value: MsgDeleteUsers.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteUsers: Could not create message: ' + e.message)
			}
		},
		
		msgCreateUsers({ value }: msgCreateUsersParams): EncodeObject {
			try {
				return { typeUrl: "/newvuetest.newvuetest.MsgCreateUsers", value: MsgCreateUsers.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateUsers: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateUsers({ value }: msgUpdateUsersParams): EncodeObject {
			try {
				return { typeUrl: "/newvuetest.newvuetest.MsgUpdateUsers", value: MsgUpdateUsers.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateUsers: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						Params: getStructure(typeParams.fromPartial({})),
						Users: getStructure(typeUsers.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			NewvuetestNewvuetest: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;