import { ChartComponent } from '@/Components/ChartComponent';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion, bts }) {
  console.log(bts)

  
  const initialData = [
    { time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85 },
    { time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75 },
    { time: '2018-10-23', open: 175.77, high: 179.49, low: 175.44, close: 178.53 },
    { time: '2018-10-24', open: 178.58, high: 182.37, low: 176.31, close: 176.97 },
    { time: '2018-10-25', open: 177.52, high: 180.50, low: 176.83, close: 179.07 },
    { time: '2018-10-26', open: 176.88, high: 177.34, low: 170.91, close: 172.23 },
    { time: '2018-10-29', open: 173.74, high: 175.99, low: 170.95, close: 173.20 },
    { time: '2018-10-30', open: 173.16, high: 176.43, low: 172.64, close: 176.24 },
    { time: '2018-10-31', open: 177.98, high: 178.85, low: 175.59, close: 175.88 },
    { time: '2018-11-01', open: 176.84, high: 180.86, low: 175.90, close: 180.46 },
    { time: '2018-11-02', open: 182.47, high: 183.01, low: 177.39, close: 179.93 },
    { time: '2018-11-05', open: 181.02, high: 182.41, low: 179.30, close: 182.19 },
    { time: '2018-11-06', open: 181.93, high: 182.65, low: 180.05, close: 182.01 },
    { time: '2018-11-07', open: 183.79, high: 187.68, low: 182.06, close: 187.23 },
    { time: '2018-11-08', open: 187.13, high: 188.69, low: 185.72, close: 188.00 },
    { time: '2018-11-09', open: 188.32, high: 188.48, low: 184.96, close: 185.99 },
    { time: '2018-11-12', open: 185.23, high: 186.95, low: 179.02, close: 179.43 },
    { time: '2018-11-13', open: 177.30, high: 181.62, low: 172.85, close: 179.00 },
    { time: '2018-11-14', open: 182.61, high: 182.90, low: 179.15, close: 179.90 },
    { time: '2018-11-15', open: 179.01, high: 179.67, low: 173.61, close: 177.36 },
    { time: '2018-11-16', open: 173.99, high: 177.60, low: 173.51, close: 177.02 },
    { time: '2018-11-19', open: 176.71, high: 178.88, low: 172.30, close: 173.59 },
    { time: '2018-11-20', open: 169.25, high: 172.00, low: 167.00, close: 169.05 },
    { time: '2018-11-21', open: 170.00, high: 170.93, low: 169.15, close: 169.30 },
    { time: '2018-11-23', open: 169.39, high: 170.33, low: 168.47, close: 168.85 },
    { time: '2018-11-26', open: 170.20, high: 172.39, low: 168.87, close: 169.82 },
    { time: '2018-11-27', open: 169.11, high: 173.38, low: 168.82, close: 173.22 },
    { time: '2018-11-28', open: 172.91, high: 177.65, low: 170.62, close: 177.43 },
    { time: '2018-11-29', open: 176.80, high: 177.27, low: 174.92, close: 175.66 },
    { time: '2018-11-30', open: 175.75, high: 180.37, low: 175.11, close: 180.32 },
    { time: '2018-12-03', open: 183.29, high: 183.50, low: 179.35, close: 181.74 },
    { time: '2018-12-04', open: 181.06, high: 182.23, low: 174.55, close: 175.30 },
    { time: '2018-12-06', open: 173.50, high: 176.04, low: 170.46, close: 175.96 },
    { time: '2018-12-07', open: 175.35, high: 178.36, low: 172.24, close: 172.79 },
    { time: '2018-12-10', open: 173.39, high: 173.99, low: 167.73, close: 171.69 },
    { time: '2018-12-11', open: 174.30, high: 175.60, low: 171.24, close: 172.21 },
    { time: '2018-12-12', open: 173.75, high: 176.87, low: 172.81, close: 174.21 },
    { time: '2018-12-13', open: 174.31, high: 174.91, low: 172.07, close: 173.87 },
    { time: '2018-12-14', open: 172.98, high: 175.14, low: 171.95, close: 172.29 },
    { time: '2018-12-17', open: 171.51, high: 171.99, low: 166.93, close: 167.97 },
    { time: '2018-12-18', open: 168.90, high: 171.95, low: 168.50, close: 170.04 },
    { time: '2018-12-19', open: 170.92, high: 174.95, low: 166.77, close: 167.56 },
    { time: '2018-12-20', open: 166.28, high: 167.31, low: 162.23, close: 164.16 },
    { time: '2018-12-21', open: 162.81, high: 167.96, low: 160.17, close: 160.48 },
    { time: '2018-12-24', open: 160.16, high: 161.40, low: 158.09, close: 158.14 },
    { time: '2018-12-26', open: 159.46, high: 168.28, low: 159.44, close: 168.28 },
    { time: '2018-12-27', open: 166.44, high: 170.46, low: 163.36, close: 170.32 },
    { time: '2018-12-28', open: 171.22, high: 173.12, low: 168.60, close: 170.22 },
    { time: '2018-12-31', open: 171.47, high: 173.24, low: 170.65, close: 171.82 },
    { time: '2019-01-02', open: 169.71, high: 173.18, low: 169.05, close: 172.41 },
    { time: '2019-01-03', open: 171.84, high: 171.84, low: 168.21, close: 168.61 },
    { time: '2019-01-04', open: 170.18, high: 174.74, low: 169.52, close: 173.62 },
    { time: '2019-01-07', open: 173.83, high: 178.18, low: 173.83, close: 177.04 },
    { time: '2019-01-08', open: 178.57, high: 179.59, low: 175.61, close: 177.89 },
    { time: '2019-01-09', open: 177.87, high: 181.27, low: 177.10, close: 179.73 },
    { time: '2019-01-10', open: 178.03, high: 179.24, low: 176.34, close: 179.06 },
    { time: '2019-01-11', open: 177.93, high: 180.26, low: 177.12, close: 179.41 },
    { time: '2019-01-14', open: 177.59, high: 179.23, low: 176.90, close: 178.81 },
    { time: '2019-01-15', open: 176.08, high: 177.82, low: 175.20, close: 176.47 },
    { time: '2019-01-16', open: 177.09, high: 177.93, low: 175.86, close: 177.04 },
    { time: '2019-01-17', open: 174.01, high: 175.46, low: 172.00, close: 174.87 },
    { time: '2019-01-18', open: 176.98, high: 180.04, low: 176.18, close: 179.58 },
    { time: '2019-01-22', open: 177.49, high: 178.60, low: 175.36, close: 177.11 },
    { time: '2019-01-23', open: 176.59, high: 178.06, low: 174.53, close: 176.89 },
    { time: '2019-01-24', open: 177.00, high: 177.53, low: 175.30, close: 177.29 },
    { time: '2019-01-25', open: 179.78, high: 180.87, low: 178.61, close: 180.40 },
    { time: '2019-01-28', open: 178.97, high: 179.99, low: 177.41, close: 179.83 },
    { time: '2019-01-29', open: 178.96, high: 180.15, low: 178.09, close: 179.69 },
    { time: '2019-01-30', open: 180.47, high: 184.20, low: 179.78, close: 182.18 },
    { time: '2019-01-31', open: 181.50, high: 184.67, low: 181.06, close: 183.53 },
    { time: '2019-02-01', open: 184.03, high: 185.15, low: 182.83, close: 184.37 },
    { time: '2019-02-04', open: 184.30, high: 186.43, low: 183.84, close: 186.43 },
    { time: '2019-02-05', open: 186.89, high: 186.99, low: 184.69, close: 186.39 },
    { time: '2019-02-06', open: 186.69, high: 186.69, low: 184.06, close: 184.72 },
    { time: '2019-02-07', open: 183.74, high: 184.92, low: 182.45, close: 184.07 },
    { time: '2019-02-08', open: 183.05, high: 184.58, low: 182.72, close: 184.54 },
    { time: '2019-02-11', open: 185.00, high: 185.42, low: 182.75, close: 182.92 },
    { time: '2019-02-12', open: 183.84, high: 186.40, low: 183.52, close: 185.52 },
    { time: '2019-02-13', open: 186.30, high: 188.68, low: 185.92, close: 188.41 },
    { time: '2019-02-14', open: 187.50, high: 188.93, low: 186.00, close: 187.71 },
    { time: '2019-02-15', open: 189.87, high: 192.62, low: 189.05, close: 192.39 },
    { time: '2019-02-19', open: 191.71, high: 193.19, low: 191.28, close: 192.33 },
    { time: '2019-02-20', open: 192.39, high: 192.40, low: 191.11, close: 191.85 },
    { time: '2019-02-21', open: 191.85, high: 192.37, low: 190.61, close: 191.82 },
    { time: '2019-02-22', open: 191.69, high: 192.54, low: 191.62, close: 192.39 },
    { time: '2019-02-25', open: 192.75, high: 193.42, low: 189.96, close: 189.98 },
    { time: '2019-02-26', open: 185.59, high: 188.47, low: 182.80, close: 188.30 },
    { time: '2019-02-27', open: 187.90, high: 188.50, low: 183.21, close: 183.67 },
    { time: '2019-02-28', open: 183.60, high: 185.19, low: 183.11, close: 185.14 },
    { time: '2019-03-01', open: 185.82, high: 186.56, low: 182.86, close: 185.17 },
    { time: '2019-03-04', open: 186.20, high: 186.24, low: 182.10, close: 183.81 },
    { time: '2019-03-05', open: 184.24, high: 185.12, low: 183.25, close: 184.00 },
    { time: '2019-03-06', open: 184.53, high: 184.97, low: 183.84, close: 184.45 },
    { time: '2019-03-07', open: 184.39, high: 184.62, low: 181.58, close: 182.51 },
    { time: '2019-03-08', open: 181.49, high: 181.91, low: 179.52, close: 181.23 },
    { time: '2019-03-11', open: 182.00, high: 183.20, low: 181.20, close: 182.44 },
    { time: '2019-03-12', open: 183.43, high: 184.27, low: 182.33, close: 184.00 },
    { time: '2019-03-13', open: 183.24, high: 183.78, low: 181.08, close: 181.14 },
    { time: '2019-03-14', open: 181.28, high: 181.74, low: 180.50, close: 181.61 },
    { time: '2019-03-15', open: 182.30, high: 182.49, low: 179.57, close: 182.23 },
    { time: '2019-03-18', open: 182.53, high: 183.48, low: 182.33, close: 183.42 },
    { time: '2019-03-19', open: 184.19, high: 185.82, low: 183.48, close: 184.13 },
    { time: '2019-03-20', open: 184.30, high: 187.12, low: 183.43, close: 186.10 },
    { time: '2019-03-21', open: 185.50, high: 190.00, low: 185.50, close: 189.97 },
    { time: '2019-03-22', open: 189.31, high: 192.05, low: 188.67, close: 188.75 },
    { time: '2019-03-25', open: 188.75, high: 191.71, low: 188.51, close: 189.68 },
    { time: '2019-03-26', open: 190.69, high: 192.19, low: 188.74, close: 189.34 },
    { time: '2019-03-27', open: 189.65, high: 191.61, low: 188.39, close: 189.25 },
    { time: '2019-03-28', open: 189.91, high: 191.40, low: 189.16, close: 190.06 },
    { time: '2019-03-29', open: 190.85, high: 192.04, low: 190.14, close: 191.89 },
    { time: '2019-04-01', open: 192.99, high: 195.90, low: 192.85, close: 195.64 },
    { time: '2019-04-02', open: 195.50, high: 195.50, low: 194.01, close: 194.31 },
    { time: '2019-04-03', open: 194.98, high: 198.78, low: 194.11, close: 198.61 },
    { time: '2019-04-04', open: 199.00, high: 200.49, low: 198.02, close: 200.45 },
    { time: '2019-04-05', open: 200.86, high: 203.13, low: 200.61, close: 202.06 },
    { time: '2019-04-08', open: 201.37, high: 203.79, low: 201.24, close: 203.55 },
    { time: '2019-04-09', open: 202.26, high: 202.71, low: 200.46, close: 200.90 },
    { time: '2019-04-10', open: 201.26, high: 201.60, low: 198.02, close: 199.43 },
    { time: '2019-04-11', open: 199.90, high: 201.50, low: 199.03, close: 201.48 },
    { time: '2019-04-12', open: 202.13, high: 204.26, low: 202.13, close: 203.85 },
    { time: '2019-04-15', open: 204.16, high: 205.14, low: 203.40, close: 204.86 },
    { time: '2019-04-16', open: 205.25, high: 205.99, low: 204.29, close: 204.47 },
    { time: '2019-04-17', open: 205.34, high: 206.84, low: 205.32, close: 206.55 },
    { time: '2019-04-18', open: 206.02, high: 207.78, low: 205.10, close: 205.66 },
    { time: '2019-04-22', open: 204.11, high: 206.25, low: 204.00, close: 204.78 },
    { time: '2019-04-23', open: 205.14, high: 207.33, low: 203.43, close: 206.05 },
    { time: '2019-04-24', open: 206.16, high: 208.29, low: 205.54, close: 206.72 },
    { time: '2019-04-25', open: 206.01, high: 207.72, low: 205.06, close: 206.50 },
    { time: '2019-04-26', open: 205.88, high: 206.14, low: 203.34, close: 203.61 },
    { time: '2019-04-29', open: 203.31, high: 203.80, low: 200.34, close: 202.16 },
    { time: '2019-04-30', open: 201.55, high: 203.75, low: 200.79, close: 203.70 },
    { time: '2019-05-01', open: 203.20, high: 203.52, low: 198.66, close: 198.80 },
    { time: '2019-05-02', open: 199.30, high: 201.06, low: 198.80, close: 201.01 },
    { time: '2019-05-03', open: 202.00, high: 202.31, low: 200.32, close: 200.56 },
    { time: '2019-05-06', open: 198.74, high: 199.93, low: 198.31, close: 199.63 },
    { time: '2019-05-07', open: 196.75, high: 197.65, low: 192.96, close: 194.77 },
    { time: '2019-05-08', open: 194.49, high: 196.61, low: 193.68, close: 195.17 },
    { time: '2019-05-09', open: 193.31, high: 195.08, low: 191.59, close: 194.58 },
    { time: '2019-05-10', open: 193.21, high: 195.49, low: 190.01, close: 194.58 },
    { time: '2019-05-13', open: 191.00, high: 191.66, low: 189.14, close: 190.34 },
    { time: '2019-05-14', open: 190.50, high: 192.76, low: 190.01, close: 191.62 },
    { time: '2019-05-15', open: 190.81, high: 192.81, low: 190.27, close: 191.76 },
    { time: '2019-05-16', open: 192.47, high: 194.96, low: 192.20, close: 192.38 },
    { time: '2019-05-17', open: 190.86, high: 194.50, low: 190.75, close: 192.58 },
    { time: '2019-05-20', open: 191.13, high: 192.86, low: 190.61, close: 190.95 },
    { time: '2019-05-21', open: 187.13, high: 192.52, low: 186.34, close: 191.45 },
    { time: '2019-05-22', open: 190.49, high: 192.22, low: 188.05, close: 188.91 },
    { time: '2019-05-23', open: 188.45, high: 192.54, low: 186.27, close: 192.00 },
    { time: '2019-05-24', open: 192.54, high: 193.86, low: 190.41, close: 193.59 },
  ]; 
  return (
    <>
      <Head title="Welcome" />
      <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
        <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
          {auth.user ? (
            <Link
              href={route('dashboard')}
              className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href={route('login')}
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Log in
              </Link>

              <Link
                href={route('register')}
                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          <div className="flex justify-center">
            <svg
              viewBox="0 0 62 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-auto bg-gray-100 dark:bg-gray-900"
            >
              <path
                d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
                fill="#FF2D20"
              />
            </svg>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <ChartComponent data={initialData}></ChartComponent>

              <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
                <div>
                  <div className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      className="w-7 h-7 stroke-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                      />
                    </svg>
                  </div>

                  <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                    Vibrant Ecosystem
                  </h2>

                  <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Laravel's robust library of first-party tools and libraries, such as{' '}
                    <a
                      href="https://forge.laravel.com"
                      className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                      Forge
                    </a>
                    ,{' '}
                    <a
                      href="https://vapor.laravel.com"
                      className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                      Vapor
                    </a>
                    ,{' '}
                    <a
                      href="https://nova.laravel.com"
                      className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                      Nova
                    </a>
                    , and{' '}
                    <a
                      href="https://envoyer.io"
                      className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                      Envoyer
                    </a>{' '}
                    help you take your projects to the next level. Pair them with powerful open
                    source libraries like{' '}
                    <a
                      href="https://laravel.com/docs/billing"
                      className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                      Cashier
                    </a>
                    ,{' '}
                    <a
                      href="https://laravel.com/docs/dusk"
                      className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                      Dusk
                    </a>
                    ,{' '}
                    <a
                      href="https://laravel.com/docs/broadcasting"
                      className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                      Echo
                    </a>
                    ,{' '}
                    <a
                      href="https://laravel.com/docs/horizon"
                      className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                      Horizon
                    </a>
                    ,{' '}
                    <a
                      href="https://laravel.com/docs/sanctum"
                      className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                      Sanctum
                    </a>
                    ,{' '}
                    <a
                      href="https://laravel.com/docs/telescope"
                      className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                      Telescope
                    </a>
                    , and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16 px-6 sm:items-center sm:justify-between">
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-start">
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/sponsors/taylorotwell"
                  className="group inline-flex items-center hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    className="-mt-px me-1 w-5 h-5 stroke-gray-400 dark:stroke-gray-600 group-hover:stroke-gray-600 dark:group-hover:stroke-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Sponsor
                </a>
              </div>
            </div>

            <div className="ms-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-end sm:ms-0">
              Laravel v{laravelVersion} (PHP v{phpVersion})
            </div>
          </div>
        </div>
      </div>

      <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
    </>
  );
}
