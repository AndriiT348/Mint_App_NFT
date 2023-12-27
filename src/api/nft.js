import siteConfig from '../config/site.config';
import {getContractInstance} from './index'

async function owner() {
}

async function mint(amount, address, value) {
  try {
    const contractInstance = getContractInstance()
    const res = await contractInstance.methods.mint(amount).send({
      from: address,
      value: value
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

export {
  mint,
  owner
}
