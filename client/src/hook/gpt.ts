/**
 * 发起聊天请求到指定的 API，并返回聊天结果数据。
 * @param {Array} messageList 聊天消息列表
 * @param {string} apikey API 密钥
 * @returns {Promise<Object>} 返回一个 Promise，包含从 API 返回的数据
 */
export async function chat(messageList:string, apikey:string) {
    try {
        const result = await fetch('https://api.302.ai/v1/chat/completions', {
            method: 'post',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${apikey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: messageList,
            })
        });
        const data = await result.json(); // 解析 API 返回的 JSON 数据
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}