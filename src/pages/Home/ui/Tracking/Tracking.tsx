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

// Функция для получения случайной даты
const getRandomDate = (start: Date, end: Date) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0]; // Формат YYYY-MM-DD
};

const getRandomStatus = () => {
  const statuses = ['in_storage', 'on_the_way', 'delivered'];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

export const Tracking: FC = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const [error, setError] = useState('');
  const [parcelData, setParcelData] = useState<ParcelData | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
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

    const trackingHistory: TrackingData[] = [
      { date: getRandomDate(new Date(2024, 5, 1), new Date(2024, 6, 1)), status: 'Поступил на склад' },
      { date: getRandomDate(new Date(2024, 6, 1), new Date(2024, 6, 30)), status: 'В пути' },
      { date: getRandomDate(new Date(2024, 6, 30), new Date()), status: status === 'delivered' ? 'Прибыл в Бишкек' : 'На складе' },
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
    event.stopPropagation(); // Остановить всплытие события
    setIsDeleting(true);
    const updatedHistory = history.filter((item) => item !== code);
    setHistory(updatedHistory);
    localStorage.setItem('trackingHistory', JSON.stringify(updatedHistory));

    setTimeout(() => {
      setIsDeleting(false);
    }, 200);
  };

  const handleHistoryClick = (code: string, event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation(); // Остановить всплытие события
    setTrackingCode(code);
    setShowHistory(false);
  };

  return (
    <section className={style.wrapper} id='tracking'>
      <div className={style.container}>
        <div className={style.searchSection}>
          <h2 className={style.title}>Отслеживание товара</h2>
          <div className={style.line}></div>
        </div>
        <div className={style.trackingInfo}>
          <input
            className={style.searchInp}
            type="text"
            value={trackingCode}
            placeholder={error || "Введите трек-код"}
            onChange={(e) => {
              setTrackingCode(e.target.value);
              if (error) setError(''); // Сбрасываем ошибку при вводе
            }}
            onFocus={() => setShowHistory(true)}
            onBlur={() => {
              if (!isDeleting) setTimeout(() => setShowHistory(false), 200);
            }}
          />
          <button onClick={handleTrack} className={style.searchButton}>
            ОТСЛЕДИТЬ
          </button>

          {showHistory && history.length > 0 && (
            <div className={style.history}>
              <ul>
                {history.map((code, index) => (
                  <li key={index} className={style.historyItem} onClick={(e) => handleHistoryClick(code, e)}>
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
            <div className={style.trackingTable}>
              <div className={style.trackingRow}>
                <div className={style.trackingCellHeader}>Дата</div>
                <div className={style.trackingCell}>
                  {parcelData.trackingHistory.map((data, index) => (
                    <div key={index}>{new Date(data.date).toLocaleDateString('ru-RU')}</div>
                  ))}
                </div>
              </div>

              <div className={style.trackingRow}>
                <div className={style.trackingCellHeader}>Статус</div>
                <div className={style.trackingCell}>
                  {parcelData.trackingHistory.map((data, index) => (
                    <div key={index} className={style.trackingStatusIndicator}>
                      <div className={style.statusDot}></div>
                      <div className={style.statusDescription}>{data.status}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={style.trackingRow}>
                <div className={style.trackingCellHeader}>Персональный код</div>
                <div className={style.trackingCell}>
                  <div>{parcelData.personalCode}</div>
                </div>
              </div>

              <div className={style.trackingRow}>
                <div className={style.trackingCellHeader}>Трек-код</div>
                <div className={style.trackingCell}>
                  <div>{parcelData.trackingCode}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tracking;
