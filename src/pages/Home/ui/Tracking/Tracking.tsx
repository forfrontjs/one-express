import { FC, useState, useEffect } from 'react';
import style from './Tracking.module.scss';

interface TrackingData {
  date: string;
  status: string;
}

interface ParcelData {
  personalCode: string;
  trackingCode: string;
  trackingHistory: TrackingData[];
}

// interface APIResponse {
//   status: string;
//   dateCreated: string;
//   dateUpdated?: string;
// }

// const getRandomDate = (start: Date, end: Date) => {
//   const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//   return date.toISOString();
// };

const getRandomStatus = () => {
  const statuses = ["in_storage", "on_the_way", "delivered"]
  return statuses[Math.floor(Math.random() * statuses.length)]
}

export const Tracking: FC = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const [parcelData, setParcelData] = useState<ParcelData | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [error, setError] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem('trackingHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const saveToHistory = (code: string) => {
    if (!history.includes(code)) {
      const updatedHistory = [code, ...history];
      setHistory(updatedHistory);
      localStorage.setItem('trackingHistory', JSON.stringify(updatedHistory));
    }
  };

  const handleTrack = () => {
    if (trackingCode.length < 11) {
      setError('Трек-код должен содержать не менее 11 символов');
      return;
    }
    setError('');

    const status = getRandomStatus();
    // const dateCreated = getRandomDate(new Date(2024, 5, 1), new Date(2024, 6, 1));
    // const dateUpdated = status === "delivered" ? getRandomDate(new Date(2024, 6, 1), new Date()) : undefined;

    const trackingHistory: TrackingData[] = [
      { date: '2024-06-20', status: 'Поступил на склад' },
      { date: '2024-06-25', status: 'В пути' },
      { date: '2024-07-12', status: status === "delivered" ? 'Прибыл в Бишкек' : 'На складе' },
    ];

    const mockedData: ParcelData = {
      personalCode: 'ONE-1',
      trackingCode: trackingCode,
      trackingHistory,
    };

    setParcelData(mockedData);
    saveToHistory(trackingCode);
    setTrackingCode('');
  };

  const removeFromHistory = (code: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsDeleting(true);
    const updatedHistory = history.filter((item) => item !== code);
    setHistory(updatedHistory);
    localStorage.setItem('trackingHistory', JSON.stringify(updatedHistory));

    setTimeout(() => {
      setIsDeleting(false);
    }, 200);
  };

  const handleHistoryClick = (code: string) => {
    setTrackingCode(code);
    setShowHistory(false);
  };

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.searchSection}>
          <h2 className={style.title}>Отслеживание товара</h2>
          <div className={style.line}></div>
        </div>
        <div className={style.trackingInfo}>
          <input
            className={style.searchInp}
            type="text"
            placeholder="Введите трек-код"
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            onFocus={() => setShowHistory(true)}
            onBlur={() => {
              if (!isDeleting) setTimeout(() => setShowHistory(false), 200);
            }}
          />
          <button onClick={handleTrack} className={style.searchButton}>
            ОТСЛЕДИТЬ
          </button>
          {error && <p className={style.error}>{error}</p>}

          {showHistory && history.length > 0 && (
            <div className={style.history}>
              <ul>
                {history.map((code, index) => (
                  <li key={index} className={style.historyItem} onClick={() => handleHistoryClick(code)}>
                    {code}
                    <button
                      onMouseDown={(e) => removeFromHistory(code, e)}
                      className={style.deleteButton}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {parcelData && (
          <div className={style.result}>
            <h3 className={style.info_title}>Информация о посылке</h3>
            <div className={style.trackingTable}>
              <div className={style.trackingRow}>
                <div className={style.trackingCellHeader}>Дата</div>
                <div className={style.trackingCellHeader}>Статус</div>
                <div className={style.trackingCellHeader}>Персональный код</div>
                <div className={style.trackingCellHeader}>Трек-код</div>
              </div>
              {parcelData.trackingHistory.map((data, index) => (
                <div className={style.trackingRow} key={index}>
                  <div className={style.trackingCell}>
                    {new Date(data.date).toLocaleDateString('ru-RU')}
                  </div>
                  <div className={style.trackingCell}>
                    <div className={style.statusWithDot}>{data.status}</div>
                  </div>
                  {index === 0 && (
                    <>
                      <div className={style.trackingCell} style={{ flex: 1 }}>
                        {parcelData.personalCode}
                      </div>
                      <div className={style.trackingCell} style={{ flex: 1 }}>
                        {parcelData.trackingCode}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tracking;
