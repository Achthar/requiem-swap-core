// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0;

/*
 * RequiemSwapFinance 
 * App:             https://Requiemswap.finance
 * Medium:          https://medium.com/@Requiem_swap    
 * Twitter:         https://twitter.com/Requiem_swap 
 * Telegram:        https://t.me/Requiem_swap
 * Announcements:   https://t.me/Requiem_swap_news
 * GitHub:          https://github.com/RequiemSwapFinance
 */

interface IRequiemCallee {
    function pancakeCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
