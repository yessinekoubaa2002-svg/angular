export interface EventModel {
  id?: number;
  title: string;
  description: string;
  event_date: string;
  end_date: string;
  location: string;
  category_id: number;
  capacity: number;
  price?: number;
  is_free: boolean;
}