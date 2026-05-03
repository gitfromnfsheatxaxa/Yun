// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = '8496125188:AAHEdxGmi0szhCmSNK_v2rnT9R1hbt8THq0';
const TELEGRAM_CHAT_ID = '-5241916769';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

/**
 * Send form data to Telegram group
 * @param {Object} formData - The form data to send
 * @returns {Promise<boolean>} - Success status
 */
export const sendToTelegram = async (formData) => {
  try {
    const { name, phone, tattooIdea, placement, preferredDate, budget } = formData;
    
    // Format the message with emojis and formatting
    const message = `
🐉 <b>NEW TATTOO BOOKING REQUEST</b> 🐉

━━━━━━━━━━━━━━━━━━━━
👤 <b>Name:</b> ${name}
📱 <b>Phone/Telegram:</b> ${phone}
━━━━━━━━━━━━━━━━━━━━

📝 <b>Tattoo Idea/Description:</b>
${tattooIdea}

━━━━━━━━━━━━━━━━━━━━
📍 <b>Body Placement:</b> ${formatPlacement(placement)}
📅 <b>Preferred Date:</b> ${preferredDate || 'Not specified'}
💰 <b>Budget Range:</b> ${formatBudget(budget)}
━━━━━━━━━━━━━━━━━━━━

🕐 <b>Received:</b> ${new Date().toLocaleString()}
    `;

    const response = await fetch(TELEGRAM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Telegram API Error:', data);
      return false;
    }

    return data.ok === true;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
};

/**
 * Format placement value for display
 * @param {string} placement - The placement value
 * @returns {string} - Formatted placement
 */
const formatPlacement = (placement) => {
  const placements = {
    arm: '💪 Arm / Sleeve',
    chest: '🫀 Chest',
    back: '_back Back',
    leg: '🦵 Leg',
    shoulder: ' shoulder Shoulder',
    forearm: ' forearm Forearm',
    other: '📍 Other',
  };
  return placements[placement] || '📍 Not specified';
};

/**
 * Format budget value for display
 * @param {string} budget - The budget value
 * @returns {string} - Formatted budget
 */
const formatBudget = (budget) => {
  const budgets = {
    '150-300': '$150 - $300',
    '300-600': '$300 - $600',
    '600-1000': '$600 - $1,000',
    '1000-2000': '$1,000 - $2,000',
    '2000+': '$2,000+',
  };
  return budgets[budget] || '💰 Not specified';
};