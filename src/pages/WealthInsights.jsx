import React from "react";
import { Link, useParams } from "react-router-dom";

export const articles = [
  {
    title: "What is a Mutual Fund?",
    subtitle: "A Simple Guide for Beginners",
    category: "Investment Guide",
    content: (
      <>
        <p>A Mutual Fund is an investment where money from many investors is pooled together and invested in assets such as shares, bonds and other securities.</p>
        <p>The money is managed by a professional fund management team according to the objective of the scheme.</p>
        <p><strong>In simple words:</strong> Many investors → Money is pooled → It is invested → Investors own units of the fund.</p>

        <h3>How can you invest?</h3>
        <h4>SIP – Invest Regularly</h4>
        <p>SIP (Systematic Investment Plan) means investing a fixed amount regularly, usually every month.</p>
        <p>For example, ₹5,000 or ₹10,000 every month.</p>
        <p>SIP helps develop a disciplined investment habit, but returns are not guaranteed.</p>

        <h4>Lumpsum – Invest at One Time</h4>
        <p>A lumpsum investment means investing a larger amount at one time.</p>
        <p>For example, investing ₹5 lakh when you have a suitable amount available for investment.</p>

        <h4>SWP – Withdraw Regularly</h4>
        <p>SWP (Systematic Withdrawal Plan) allows you to withdraw a fixed amount regularly from an existing mutual fund investment.</p>
        <p>For example, withdrawing ₹15,000 every month, subject to the value of the investment and applicable scheme terms.</p>

        <h3>Is Mutual Fund Risk-Free?</h3>
        <p>No. Mutual funds are market-linked investments, and their value can go up or down.</p>
        <p>Different mutual fund categories carry different levels of risk. Therefore, investment decisions should consider the goal, time horizon and risk capacity of the investor.</p>

        <h3>Simply Remember</h3>
        <ul>
          <li><strong>SIP</strong> → Invest regularly</li>
          <li><strong>Lumpsum</strong> → Invest at one time</li>
          <li><strong>SWP</strong> → Withdraw regularly</li>
        </ul>

        <p>Mutual funds can be useful for different financial goals, but understanding the investment and staying disciplined through market ups and downs is important.</p>
        <p className="disclaimer">Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. This article is for educational and informational purposes only and should not be construed as investment advice.</p>
      </>
    ),
  },
  {
    title: "Types of Mutual Funds",
    subtitle: "A Simple Guide for Beginners",
    category: "Investment Guide",
    content: (
      <>
        <p>Mutual funds are broadly classified based on where they invest. The three major categories are Equity Funds, Debt Funds and Hybrid Funds.</p>

        <h3>1. Equity Funds</h3>
        <p>Equity funds primarily invest in shares of companies. They are generally suitable for investors with a longer investment horizon and the ability to accept market fluctuations.</p>
        <p><strong>Common types include:</strong></p>
        <ul>
          <li><strong>Large Cap Fund</strong> – Mainly invests in large, established companies.</li>
          <li><strong>Mid Cap Fund</strong> – Invests mainly in medium-sized companies.</li>
          <li><strong>Small Cap Fund</strong> – Invests mainly in smaller companies.</li>
          <li><strong>Large &amp; Mid Cap Fund</strong> – Invests in both large and mid-sized companies.</li>
          <li><strong>Flexi Cap Fund</strong> – Can invest across large, mid and small-cap companies.</li>
          <li><strong>Multi Cap Fund</strong> – Invests across large, mid and small-cap companies with minimum allocation requirements.</li>
          <li><strong>Focused Fund</strong> – Invests in a relatively limited number of companies.</li>
          <li><strong>Value Fund</strong> – Follows a value-investing approach.</li>
          <li><strong>Contra Fund</strong> – Follows a contrarian investment approach.</li>
          <li><strong>ELSS</strong> – An equity-oriented tax-saving mutual fund with a statutory lock-in period.</li>
          <li><strong>Dividend Yield Fund</strong> – Focuses on companies that generally have higher dividend yields.</li>
          <li><strong>Sectoral/Thematic Fund</strong> – Focuses on a particular sector or investment theme.</li>
        </ul>

        <h3>2. Debt Funds</h3>
        <p>Debt funds primarily invest in fixed-income securities such as government securities, corporate bonds and money-market instruments.</p>
        <p><strong>Common types include:</strong></p>
        <ul>
          <li>Overnight Fund</li>
          <li>Liquid Fund</li>
          <li>Ultra Short Duration Fund</li>
          <li>Low Duration Fund</li>
          <li>Money Market Fund</li>
          <li>Short Duration Fund</li>
          <li>Medium Duration Fund</li>
          <li>Medium to Long Duration Fund</li>
          <li>Long Duration Fund</li>
          <li>Dynamic Bond Fund</li>
          <li>Corporate Bond Fund</li>
          <li>Credit Risk Fund</li>
          <li>Banking &amp; PSU Debt Fund</li>
          <li>Gilt Fund</li>
          <li>Gilt Fund with 10-year Constant Duration</li>
          <li>Floater Fund</li>
        </ul>
        <p>These funds differ mainly in the type and maturity of securities they invest in, and therefore their risk and interest-rate sensitivity can also differ.</p>

        <h3>3. Hybrid Funds</h3>
        <p>Hybrid funds invest in a combination of equity and debt, with the allocation depending on the type of fund.</p>
        <p><strong>Common types include:</strong></p>
        <ul>
          <li><strong>Conservative Hybrid Fund</strong> – Higher allocation to debt with some equity exposure.</li>
          <li><strong>Balanced Hybrid Fund</strong> – Combines equity and debt.</li>
          <li><strong>Aggressive Hybrid Fund</strong> – Higher allocation to equity with some debt exposure.</li>
          <li><strong>Dynamic Asset Allocation / Balanced Advantage Fund</strong> – Asset allocation can change based on the fund's strategy and market conditions.</li>
          <li><strong>Multi Asset Allocation Fund</strong> – Invests in at least three asset classes, subject to the applicable minimum allocation requirements.</li>
          <li><strong>Arbitrage Fund</strong> – Seeks to benefit from price differences between related market positions.</li>
          <li><strong>Equity Savings Fund</strong> – Combines equity, arbitrage and debt investments.</li>
        </ul>

        <h3>Which type is suitable?</h3>
        <p>There is no single mutual fund category that is suitable for everyone.</p>
        <p>The choice depends on factors such as the investment goal, time horizon, risk capacity and investment objective.</p>
        <p>Understanding the category before choosing a particular mutual fund is an important part of becoming a disciplined investor.</p>
      </>
    ),
  },
  {
    title: "The Power of Compounding",
    subtitle: "Let Your Money Grow Over Time",
    category: "Wealth Building",
    content: (
      <>
        <p>Compounding means earning returns not only on your original investment, but also on the returns that remain invested.</p>
        <p><strong>In simple words:</strong> Your money earns returns → those returns stay invested → they can earn further returns.</p>

        <h3>A Simple Example</h3>
        <p>Suppose you invest ₹1,00,000 and it grows at an average rate of 10% per year.</p>
        <p>After one year, it becomes ₹1,10,000.</p>
        <p>If this entire amount remains invested, the next year's growth is calculated on ₹1,10,000—not just the original ₹1,00,000.</p>
        <p>Over many years, this can create a significant difference.</p>

        <h3>Why Time Matters</h3>
        <p>Compounding needs time.</p>
        <p>Starting early gives your investment more time to grow and allows the accumulated returns to participate in future growth.</p>
        <p>This is also one of the reasons long-term SIP investing can be effective. Regular investments, combined with time and staying invested, can help build wealth gradually.</p>
        <p>However, mutual fund returns are not fixed or guaranteed, and investments can go up or down with market conditions.</p>

        <h3>Remember</h3>
        <p><strong>Start early. Invest regularly. Stay invested. Give your money time to grow.</strong></p>
        <p>The real power of compounding comes from <strong>time + discipline + staying invested.</strong></p>
      </>
    ),
  },
  {
    title: "Common Investment Mistakes",
    subtitle: "Avoiding Errors That Can Affect Your Financial Goals",
    category: "Investor Awareness",
    content: (
      <>
        <p>Investing can grow your money, but mistakes may reduce returns or cause stress. Knowing common errors can help you make better choices.</p>

        <h3>1. Investing Without Clear Goals</h3>
        <p>Set goals such as:</p>
        <ul>
          <li>Saving for education</li>
          <li>Planning for retirement</li>
          <li>Buying a home</li>
          <li>Building long-term wealth</li>
        </ul>
        <p>Your goals, time frame, and risk tolerance should guide your choices.</p>

        <h3>2. Delaying Investments</h3>
        <p>Waiting for the “perfect” time may cause you to miss opportunities and reduce the benefits of compounding. Start with an affordable amount and invest regularly.</p>

        <h3>3. Investing Without an Emergency Fund</h3>
        <p>You may need to sell investments at a bad time if you lack emergency savings. Consider building an emergency fund before making long-term investments.</p>

        <h3>4. Ignoring Risk and Time Horizon</h3>
        <p>Consider how long you can stay invested, how much loss you can handle, and whether you understand and can afford the investment.</p>

        <h3>5. Trying to Time the Market</h3>
        <p>Predicting the best time to buy or sell is difficult. A simple, goal-based plan can help you avoid emotional decisions and extra costs.</p>

        <h3>6. Failing to Diversify</h3>
        <p>Concentrating money in one investment, sector, or asset class increases risk. Diversification may reduce the impact of poor performance in one area.</p>

        <h3>7. Chasing Past Performance</h3>
        <p>Past performance does not guarantee future results. Consider an investment’s goals, risks, costs, and suitability—not just recent returns.</p>

        <h3>8. Ignoring Costs and Taxes</h3>
        <p>Fees, transaction charges, and taxes reduce returns. Even small regular costs can have a significant long-term effect.</p>

        <h3>9. Making Emotional Decisions</h3>
        <p>Fear and excitement can lead to poor choices, such as selling during a fall or investing heavily after a rise. Avoid frequent changes based on short-term movements.</p>

        <h3>10. Not Reviewing Your Investments</h3>
        <p>Your goals, income, responsibilities, and risk tolerance may change. Review your portfolio periodically to ensure it remains suitable.</p>

        <h3>Remember</h3>
        <p>Set clear goals, understand risks, diversify, avoid emotional decisions, and stay focused on the long term.</p>
        <p>A simple, disciplined plan can help you avoid common mistakes and work toward your financial goals.</p>
      </>
    ),
  },
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function WealthInsightArticle() {
  const { slug } = useParams();
  const article = articles.find((item) => slugify(item.title) === slug);

  if (!article) {
    return (
      <section className="article-page pt-32 md:pt-40 pb-24 min-h-screen">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="article-kicker">Wealth Insights</p>
          <h1 className="article-page-title">Article not found</h1>
          <Link className="article-back" to="/wealth-insights">← Back to Insights</Link>
        </div>
      </section>
    );
  }

  return (
    <article className="article-page pt-28 md:pt-36 pb-24 min-h-screen">
      <div className="article-page-glow article-page-glow-one" aria-hidden="true" />
      <div className="article-page-glow article-page-glow-two" aria-hidden="true" />
      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative">
        <Link className="article-back" to="/wealth-insights">← Back to Wealth Insights</Link>

        <header className="article-page-header" data-aos="fade-up">
          <div className="article-page-meta">
            <span>{article.category}</span>
            <span>·</span>
            <span>Wealth Insights</span>
          </div>
          <h1 className="article-page-title">{article.title}</h1>
          <p className="article-page-subtitle">{article.subtitle}</p>
          <div className="article-page-author">
            <div className="author-avatar" aria-hidden="true">DJ</div>
            <div>
              <strong>Written by Daisen Joseph</strong>
              <span>Wealth Insights · Educational content</span>
            </div>
          </div>
        </header>

        <div className="article-page-rule" />

        <div className="article-page-body" data-aos="fade-up" data-aos-delay="100">
          {article.content}
        </div>

        <footer className="article-page-footer">
          <div className="article-footer-author">
            <div className="author-avatar" aria-hidden="true">DJ</div>
            <div>
              <strong>Daisen Joseph</strong>
              <span>Author · Wealth Insights</span>
            </div>
          </div>
          <Link className="article-back article-back-bottom" to="/wealth-insights">← Read more insights</Link>
        </footer>
      </div>
    </article>
  );
}

export default function WealthInsights() {
  React.useEffect(() => {
    const nodes = document.querySelectorAll("[data-aos]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="insights-page pt-32 md:pt-40 pb-24 min-h-screen">
      <div className="insights-orb insights-orb-one" aria-hidden="true" />
      <div className="insights-orb insights-orb-two" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative">
        <header className="max-w-4xl" data-aos="fade-up">
          <div className="insights-eyebrow">
            <span className="eyebrow-line" />
            <span>Wealth Insights</span>
          </div>
          <h1 className="insights-title mt-5">
            Knowledge for better
            <span> financial decisions.</span>
          </h1>
          <p className="insights-intro mt-7">
            Simple, practical articles from Daisen Joseph to help you understand mutual funds,
            long-term investing, compounding and common investor mistakes.
          </p>
          <div className="insights-author mt-8">
            <div className="author-avatar" aria-hidden="true">DJ</div>
            <div>
              <p className="author-name">Daisen Joseph</p>
              <p className="author-role">Wealth Insights · Educational content</p>
            </div>
          </div>
        </header>

        <div className="insights-rule" data-aos="fade-up" data-aos-delay="80">
          <span>Explore the journal</span>
          <span>{articles.length} articles</span>
        </div>

        <div className="insights-grid">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="insight-card"
              data-aos="fade-up"
              style={{ "--delay": `${index * 90}ms` }}
            >
              <Link className="insight-card-trigger" to={`/wealth-insights/${slugify(article.title)}`}>
                <div className="card-topline">
                  <span className="article-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="article-category">{article.category}</span>
                </div>
                <div className="card-decoration" aria-hidden="true"><span /><span /><span /></div>
                <h2>{article.title}</h2>
                <p className="card-subtitle">{article.subtitle}</p>
                <div className="card-footer">
                  <div className="mini-author"><span className="mini-avatar">D</span><span>Daisen Joseph</span></div>
                  <span className="read-link">Read article <span className="read-arrow" aria-hidden="true">↗</span></span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="insights-note" data-aos="fade-up">
          <span className="note-mark" aria-hidden="true">i</span>
          <p>These insights are educational and informational in nature. They are not a substitute for personalised investment advice.</p>
        </div>
      </div>
    </section>
  );
}
